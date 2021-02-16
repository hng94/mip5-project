import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCategory from "../../contexts/CategoryContext";
import { CategoryDTO } from "../../DTO/CategoryDTO";
import { CreateProductInput, ProductDTO } from "../../DTO/ProductDTO";
import Dropdown from "../common/Dropdown";
import QuillEditor from "../common/QuillEditor";
import ProductCard from "../Product/ProductCard";

const CREATE_PROJECT = gql`
  mutation CreateProject($data: CreateProjectInput!) {
    createProject(data: $data) {
      id
    }
  }
`;

export default function ProjectForm() {
  const [story, setStory] = useState("");
  const { categories } = useCategory();
  const [selectedCategory, setCategory] = useState<CategoryDTO>(categories[0]);

  const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT);
  const addProject = ({
    title,
    subTitle,
    url,
    startDate,
    duration,
    product,
    fundingGoal,
  }) => {
    product.price = parseInt(product.price);
    fundingGoal = parseInt(fundingGoal);
    duration = parseInt(duration);
    const body = {
      title,
      subTitle,
      url,
      startDate,
      duration,
      products: [product],
      fundingGoal,
      story: story,
      categoryId: selectedCategory.id,
    };
    createProject({
      variables: {
        data: body,
      },
    });
  };

  const { register, errors, handleSubmit, watch } = useForm();
  const projectImage = watch("url");
  const productImage = watch("product.url");
  return (
    <>
      <div className="max-w-screen-sm mx-auto mb-10">
        <form onSubmit={handleSubmit(addProject)}>
          <div className="shadow sm:rounded-md">
            <div className="px-4 rounded-t-md py-5 bg-white space-y-6 sm:p-6">
              <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                Project info
              </p>
              <div className="grid grid-cols-1 gap-6">
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
                    name="title"
                    ref={register({ required: true })}
                    placeholder="Title"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subtitle
                  </label>
                  <div className="form-input mt-1">
                    <input
                      name="subTitle"
                      ref={register({ required: true })}
                      type="text"
                      placeholder="Subtitle"
                      className="form-input mt-1 block w-full rounded border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <Dropdown items={categories} setValue={setCategory} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <img className="max-h-20" src={projectImage} alt="" />
                <div className="form-input mt-1">
                  <input
                    name="url"
                    ref={register({ required: true })}
                    type="text"
                    placeholder="Cover photo URL"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Funding goal (eur)
                </label>
                <div className="mt-1">
                  <input
                    name="fundingGoal"
                    ref={register({ required: true })}
                    type="number"
                    placeholder="0"
                    step={100}
                    className="form-input mt-1 block w-full rounded border-gray-300"
                  />
                </div>
              </div>
              {/* Story */}
              <div>
                <p className="text-2xl text-red-400 mb-2 pb-2 border-b-2 border-red-400">
                  Story
                </p>
                <QuillEditor story={story} setStory={setStory} />
              </div>
              <div>
                <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                  Campaign
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="mt-2">
                    <label>Start date</label>
                    <input
                      name="startDate"
                      ref={register({ required: true })}
                      type="date"
                      className="form-input mt-1 block w-full rounded border-gray-300"
                      id="startDate"
                    />
                  </div>
                  <div className="mt-2">
                    <label>Duration (days)</label>
                    <input
                      name="duration"
                      ref={register({ required: true })}
                      className="form-input mt-1 block w-full rounded border-gray-300"
                      type="number"
                      min={1}
                      max={365}
                      defaultValue={1}
                      step={1}
                      id="duration"
                    />
                  </div>
                </div>
              </div>
              {/* Product */}
              <p className="text-2xl text-red-400 pb-2 border-b-2 border-red-400">
                Product
              </p>
              <div key="productForm" className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="product.title"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Product title"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price (eur)
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      placeholder="price"
                      name="product.price"
                      ref={register({ required: true })}
                      className="form-input mt-1 block w-full rounded border-gray-300"
                      step={10}
                      min={0}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    name="product.description"
                    ref={register({ required: true })}
                    className="resize-none form-input mt-1 block w-full rounded border-gray-300"
                    placeholder="Product description"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product photo
                  </label>
                  <img className="max-h-20" src={productImage} alt="" />
                  <input
                    type="text"
                    name="product.url"
                    ref={register({ required: true })}
                    placeholder="Product photo URL"
                    className="form-input mt-1 block w-full rounded border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 rounded-b-md py-3 bg-gray-50 text-right sm:px-6">
              <button
                className="focus:outline-none bg-blue-500 text-white uppercase py-2 px-6 shadow-lg rounded text-sm font-medium"
                type="submit"
              >
                Save & Lauch
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
