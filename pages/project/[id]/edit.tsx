import { useRouter } from "next/router";
import Dropdown from "../../../components/Dropdown";
import QuillEditor from "../../../components/QuillEditor";
import SlateEditor from "../../../components/SlateEditor";

export default function edit() {
  const router = useRouter();
  const initData = {};
  const { id } = router.query;
  return (
    <>
      <div className="mt-5 md:mt-0">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                Basic
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Custom focus style"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subtitle
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Custom focus style"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <Dropdown />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center p-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Funding goal (eur)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    placeholder="0"
                    step={100}
                    className="mt-1"
                  />
                </div>
              </div>
              <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                Product
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price (eur)
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      placeholder="o"
                      className="mt-1"
                      step={10}
                      min={0}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="resize-none mt-1"
                  placeholder="Product description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product photo
                </label>
                <div className="mt-2 flex justify-center p-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                Story
              </p>
              <QuillEditor />
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit">Back</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
