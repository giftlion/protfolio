import Link from "next/link";
import { Item } from "nextra/normalize-pages";
import React from "react";

type PostCardProps = {
  post: Item;
};

const PostCard = (props: PostCardProps) => {
  const { post } = props;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link 
      href={post.route!} 
      className="block py-4 border-b border-gray-800 hover:border-gray-600 transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors mb-2">
            {post.title}
          </h3>
          
          {post.frontMatter?.description && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {post.frontMatter.description}
            </p>
          )}
          
          {/* Tags */}
          {post.frontMatter?.tags && post.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.frontMatter.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Date */}
        {post.frontMatter?.date && (
          <div className="text-sm text-gray-500 min-w-[100px] text-right">
            {formatDate(post.frontMatter.date)}
          </div>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
