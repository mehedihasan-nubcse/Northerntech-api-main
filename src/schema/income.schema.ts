import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const IncomeSchema = new mongoose.Schema(
  {
    shop: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
    dateString: {
      type: String,
      required: false,
    },
    month: {
      type: Number,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
    incomeFor: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },

    images: [String],
  },

  {
    versionKey: false,
    timestamps: true,
  },
);
