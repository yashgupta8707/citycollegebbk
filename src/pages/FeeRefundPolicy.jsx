import { AlertCircle, ShieldAlert, CreditCard } from 'lucide-react';

const FeeRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fee Refund Policy</h1>
          <p className="text-xl text-primary-100">Terms and conditions for fee refunds</p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Alert Banner */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-red-800 text-xl mb-2">No Refund Policy</h3>
                  <p className="text-red-900 font-semibold text-lg">
                    There is no refund applicable under any circumstances once the fee has been deposited.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ShieldAlert className="text-primary-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Management Discretion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds, if considered applicable, will be at the sole discretion of the Management of City College.
                    Any such refund, if approved, will be processed only to the original payment method (i.e., the debit or
                    credit card or bank account used during the initial transaction).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CreditCard className="text-primary-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-3">Payment Processing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For the avoidance of doubt, nothing in this policy shall obligate City College to refund the fees
                    (or any part thereof) unless such fees have actually been received by the college.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-blue-800 mb-2">Please Note:</p>
                  <p className="text-blue-900 leading-relaxed">
                    Students are advised to carefully review all admission and course details before making any fee payment.
                    Once deposited, fees are generally non-refundable as per this policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeRefundPolicy;
