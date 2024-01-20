import axios from 'axios';
import { cloudinaryConfig } from '../cloudinaryConfig';

export const uploadImage = async (
  file: File | null
): Promise<string | null> => {
  if (!file) {
    return null;
  }
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'dgrx4vv7');

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    if (response.status === 200) {
      const result = response.data;
      const uploadedImage = result.url;
      return uploadedImage;
    } else {
      console.error('Image upload failed:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Image upload failed:', error);
    return null;
  }
};
