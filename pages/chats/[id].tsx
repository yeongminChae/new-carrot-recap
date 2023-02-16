import type { NextPage } from "next";
import Layout from "@/components/layout";
import Message from "@/components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="space-y-4 py-10 px-4 pb-16">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <form className="fixed inset-x-0 bottom-0 py-4 shadow-lg">
          <div className="relative mx-auto flex w-full max-w-md items-center">
            <input
              type="text"
              className="h-9 w-full rounded-full border border-gray-300 pl-2 pr-12 shadow-lg focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
            <div className="absolute -inset-y-1 right-0 flex py-1">
              <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
