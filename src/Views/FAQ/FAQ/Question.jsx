import React from 'react';

export const Question = () => {
  const faqs = [
    {
      id: 1,
      question: 'Greek yogurt is healthy?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!'
    },
    {
      id: 2,
      question: 'Why greek yogurt is natural?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!'
    },
    {
      id: 3,
      question: 'Why our product is the best choice for you? ',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!'
    },
    {
      id: 4,
      question: 'How yogurt affects health?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!'
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map(faq => (
        <details key={faq.id} className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 border-b-2 p-4 text-gray-900">
            <h2 className="font-medium">{faq.question}</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color='#F26666'
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 px-4 leading-relaxed text-left text-gray-700 w-fit lg:w-96">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};
