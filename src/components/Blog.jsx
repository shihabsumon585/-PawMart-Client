import React from 'react';

const blogPosts = [
  { id: 1, title: "5 Tips for Keeping Your Pet Healthy", author: "Alice Johnson", date: "Jan 1, 2026", excerpt: "Learn simple yet effective ways to maintain your pet's health and happiness every day." },
  { id: 2, title: "Choosing the Right Pet Supplies", author: "Bob Smith", date: "Feb 15, 2026", excerpt: "A complete guide to selecting the best food, toys, and accessories for your furry friend." },
  { id: 3, title: "Understanding Pet Behavior", author: "Carol Davis", date: "Mar 10, 2026", excerpt: "Recognize the signs, communicate effectively, and bond better with your pets." },
  { id: 4, title: "Grooming Tips for Dogs and Cats", author: "David Lee", date: "Apr 5, 2026", excerpt: "Keep your pets looking their best with these grooming essentials and techniques." },
  { id: 5, title: "Nutrition Guide for Pets", author: "Eva Martinez", date: "May 20, 2026", excerpt: "Understand the dietary needs of different pets and how to feed them properly." },
  { id: 6, title: "Training Your Pet Effectively", author: "Frank Wilson", date: "Jun 15, 2026", excerpt: "Learn the best practices to train your pet and encourage good behavior." },
  { id: 7, title: "Pet Safety at Home", author: "Grace Kim", date: "Jul 10, 2026", excerpt: "Tips to create a safe and secure environment for your pets indoors and outdoors." },
  { id: 8, title: "Traveling with Your Pets", author: "Henry Brown", date: "Aug 1, 2026", excerpt: "Make trips enjoyable and stress-free for you and your pets with these travel tips." }
];

const Blog = () => {
  return (
    <section className="font-roboto dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Blog About <span className="text-accent">PawMart</span>
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Insights, tips, and guides for pet lovers.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className=" dark:bg-gray-800 rounded-2xl shadow p-6 hover:shadow-lg transition">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-accent mb-2">{post.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">By {post.author} | {post.date}</p>
              </div>
              <p className="text-gray-500 dark:text-gray-300">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
