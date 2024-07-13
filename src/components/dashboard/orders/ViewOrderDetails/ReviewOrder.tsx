import { OrderType } from '../../../../types/OrderType';
import { useEffect, useState } from 'react';
import Rating from '../../../ui/Rating';
import WordCounterTextArea from '../../../ui/WordCounterTextArea';
import toast from 'react-hot-toast';
import axios from '../../../../api/axios';
type ReviewOrderType = {
  order: OrderType | undefined;
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const ReviewOrder: React.FC<ReviewOrderType> = ({ order, setOrders }) => {
  const [rating, setRating] = useState(order?.rating ? order?.rating : 0);
  const [review, setReview] = useState(order?.review ? order?.review : '');
  const [hasReviewed, setHasReviewed] = useState(
    order?.rating ? (order.rating === 0 ? false : true) : false
  );

  useEffect(() => {
    setRating(order?.rating ? order?.rating : 0);
    setReview(order?.review ? order?.review : '');
    setHasReviewed(order?.rating ? (order.rating === 0 ? false : true) : false);
  }, [order]);

  const handleReview = async () => {
    if (hasReviewed) {
      toast.error('You have already reviewed this order.');
      return;
    }

    if (!rating || !review?.trim()) {
      toast.error('Please select a rating and write the review.');
      return;
    }

    try {
      const response = await axios.put(
        `/order/add-review/${order?._id}`,
        {
          serviceId: order?.serviceId?._id,
          review,
          rating
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as OrderType) {
          setOrders((prev: OrderType[]) =>
            prev.map((prevOrder: OrderType) => {
              if (prevOrder._id === order?._id) {
                return {
                  ...prevOrder,
                  rating: rating,
                  review: review
                };
              } else {
                return prevOrder;
              }
            })
          );
          toast.success('Review published successfully!');
          setHasReviewed(true);
        }
      }
    } catch (error) {
      console.log('Failed to publish review', error);
      toast.error('Failed to publish review');
    }
  };

  if (!order) return;

  return (
    <>
      <p className="view-order__review-title">Rating</p>
      <p className="view-order__value">
        <Rating value={rating} setValue={setRating} readOnly={hasReviewed} />
      </p>
      <div className="view-order__review">
        <p className="view-order__review-title">Review</p>
        <WordCounterTextArea
          state={review}
          setState={setReview}
          MAX_WORD_COUNT={200}
          placeholder="Share your experience."
          isDisabled={hasReviewed}
        />
        <button
          className="view-order__submit-button"
          onClick={() => handleReview()}
          disabled={hasReviewed}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReviewOrder;
