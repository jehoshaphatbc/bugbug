'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

export default function Insight() {

    const [selectedCategory, setSelectedCategory] = useState("SHOW_ALL");

    const categories = [
        { id: "CATEGORY_1", name: "Category 1" },
        { id: "CATEGORY_2", name: "Category 2" },
        { id: "CATEGORY_3", name: "Category 3" },
    ];

    const articles = [
        {
        id: 1,
        date: "Nov 26th, 2024",
        title: "The Future of Sustainable Farming: AI Meets Agriculture",
        image: "./innovation-1.jpg",
        category: "CATEGORY_1",
        },
        {
        id: 2,
        date: "Sep 5th, 2024",
        title: "Understanding Insect Patterns: How AI Enhances Monitoring Precision",
        image: "./innovation-2.jpg",
        category: "CATEGORY_2",
        },
        {
        id: 3,
        date: "Jul 3rd, 2024",
        title: "A Minimalist Approach to Maximizing Yield: Why Less is More",
        image: "./innovation-3.jpg",
        category: "CATEGORY_3",
        },
    ];

    const filteredArticles =
        selectedCategory === "SHOW_ALL"
        ? articles
        : articles.filter((article) => article.category === selectedCategory);

    return (
        <section className="bg-white relative">
            <div className="mx-auto max-w-7xl py-28 px-8">
                <div className="mb-10">
                    <h1 className="text-5xl leading-normal tracking-wide">Insights and Innovations</h1>
                </div>

                <div className="flex flex-col sm:flex-row justify-start gap-4 mb-8">
                    <div>
                        <button
                            onClick={() => setSelectedCategory("SHOW_ALL")}
                            className={`px-4 py-1.5 rounded-lg border uppercase text-xs tracking-[3px] ${
                                selectedCategory === "SHOW_ALL" ? "bg-secondary border-primary" : "border-primary"
                            }`}
                        >
                            Show All
                        </button>
                    </div>

                    {categories.map((category) => (
                        <div key={category.id}>
                            <button
                                
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-lg border uppercase text-xs tracking-[3px] ${
                                selectedCategory === category.id
                                    ? "bg-secondary border-primary"
                                    : "border-primary"
                                }`}
                            >
                                {category.name}
                            </button>
                        </div>

                    ))}
                </div>
                <div className="space-y-6">
                    {filteredArticles.map((article) => (
                        <div
                            key={article.id}
                            className="flex flex-col sm:flex-row items-stretch overflow-hidden gap-6 group"
                        >
                            <div className="flex-1 bg-gray-light p-8 rounded-lg border border-gray-light group-hover:border-primary duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3">
                                        <p className="text-xs col-span-full sm:col-span-1 uppercase tracking-[3px] mb-2">{article.date}</p>
                                        <h2 className="text-xl col-span-full sm:col-span-2">
                                            {article.title}
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <span className="px-4 py-1.5 text-sm rounded-lg bg-secondary text-black uppercase tracking-[3px] group-hover:bg-secondary-dark transition-colors duration-300 mt-4">
                                        Category Here
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden relative rounded-lg">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={800}
                                    height={800}
                                    className="w-full sm:w-60 h-40 object-cover rounded-lg transition-transform duration-800 ease-in-out transform group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Link href="/" className="rounded-lg bg-primary text-center uppercase text-xs tracking-[3px] px-6 py-4 text-gray-light inline-flex transition duration-150 ease-in-out hover:bg-dark-primary">
                        Visit Our Blog
                    </Link>
                </div>
            </div>
        </section>
    )
}