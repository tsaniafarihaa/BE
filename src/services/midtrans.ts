// src/services/midtrans.ts
const midtransClient = require("midtrans-client");

interface TransactionDetails {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

interface CustomerDetails {
  firstName: string;
  email: string;
}

interface CallbackDetails {
  finish: string;
  error: string;
}

class MidtransService {
  private readonly core: any;
  private readonly snap: any;

  constructor() {
    // Sandbox configuration
    const config = {
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
    };

    this.core = new midtransClient.CoreApi(config);
    this.snap = new midtransClient.Snap(config);
  }

  async createTransaction(params: {
    orderId: string;
    amount: number;
    itemDetails: TransactionDetails[];
    customerDetails: CustomerDetails;
    callbacks: CallbackDetails;
  }) {
    try {
      const parameter = {
        transaction_details: {
          order_id: params.orderId,
          gross_amount: params.amount,
        },
        item_details: params.itemDetails,
        customer_details: {
          first_name: params.customerDetails.firstName,
          email: params.customerDetails.email,
        },
        callbacks: params.callbacks,
      };

      return await this.snap.createTransaction(parameter);
    } catch (error) {
      console.error("Create transaction error:", error);
      throw error;
    }
  }

  async handleNotification(notification: any) {
    try {
      return await this.core.transaction.notification(notification);
    } catch (error) {
      console.error("Notification error:", error);
      throw error;
    }
  }

  async getStatus(orderId: string) {
    try {
      return await this.core.transaction.status(orderId);
    } catch (error) {
      console.error("Get status error:", error);
      throw error;
    }
  }
}

export const midtransService = new MidtransService();
