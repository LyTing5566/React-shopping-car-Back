const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    properties: [
      {
        productsId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object }, //! 包含國家等等..訊息
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);

//! 下單後存放的資料庫
