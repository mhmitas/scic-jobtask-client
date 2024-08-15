import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        try {
            const res = await axiosInstance.post(`/products/add-new`, { ...data, released: new Date(data.released) })
            console.log(res.data);
            if (res.data?.insertedId) {
                toast.success("Product added")
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl mx-auto my-container mt-6 mb-16 bg-base-200 p-6 rounded-lg">
            <h3 className="title-1 pb-4">Add New Product</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered"
                    {...register("productName", { required: true })}
                />
                {errors.productName && <span className="text-error">Product name is required</span>}
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Image URL</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered"
                    {...register("productImage", { required: true })}
                />
                {errors.productImage && <span className="text-error">Product image URL is required</span>}
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea
                    className="textarea textarea-bordered"
                    {...register("description", { required: true })} rows={3}
                ></textarea>
                {errors.description && <span className="text-error">Description is required</span>}
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input
                    type="number"
                    step="0.01"
                    className="input input-bordered"
                    {...register("price", { required: true, valueAsNumber: true })}
                />
                {errors.price && <span className="text-error">Price is required</span>}
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Brand</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered"
                    {...register("brand", { required: true })}
                />
                {errors.brand && <span className="text-error">Brand is required</span>}
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered"
                    {...register("category", { required: true })}
                />
                {errors.category && <span className="text-error">Category is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Released</span>
                </label>
                <input
                    type="date"
                    className="input input-bordered"
                    {...register("released")}
                    required
                />
            </div>
            <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateProduct;
