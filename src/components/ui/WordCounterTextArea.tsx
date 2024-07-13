import React from 'react';

type WordCounterTextAreaType = {
  state: string;
  setState: (value: string) => void;
  MAX_WORD_COUNT?: number;
  placeholder?: string;
  rows?: number;
  isDisabled?: boolean;
};

const WordCounterTextArea: React.FC<WordCounterTextAreaType> = ({
  state,
  setState,
  MAX_WORD_COUNT = 500,
  placeholder = '',
  rows = 7,
  isDisabled = false
}) => {
  return (
    <div className="word-counter-textarea">
      <textarea
        required
        className="word-counter-textarea__textarea"
        rows={rows}
        value={state}
        onChange={(e) => setState(e.target.value)}
        maxLength={MAX_WORD_COUNT}
        placeholder={
          placeholder ||
          'Craft your gaming tales, tips, and thoughts here. Let the community in on your gaming journey.'
        }
        disabled={isDisabled}
      />
      <p className="word-counter-textarea__word-counter">{`${state.length}/${MAX_WORD_COUNT}`}</p>
    </div>
  );
};

export default WordCounterTextArea;
