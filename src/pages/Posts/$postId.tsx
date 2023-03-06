import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useParams, useSearchParams } from 'umi';
import { PageContainer } from '@ant-design/pro-components';
import ReactMarkdown from 'react-markdown';
import BlogBG from '@/assets/imgs/blog.jpg';
import Yan from '@/assets/imgs/yan.jpeg';
import FloatButtonGroup from '@/components/FloatButtonGroup';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>();
  const [searchParams] = useSearchParams();

  const title = searchParams.get('title');

  async function refresh() {
    try {
      const res = await fetch(
        'https://proxy.claudezss.com/blog/' + params.postId,
      );
      const post = await res.json();
      if (res.status === 200) {
        setPost(post[0]);
      } else {
        setPost(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  if (post === null) {
    return <div>Post with ID {params.postId} not found.</div>;
  }

  return (
    <PageContainer ghost>
      <FloatButtonGroup />
      <div className="max-w-screen overflow-x-hidden">
        {post === undefined && (
          <div className="fixed w-screen h-screen flex justify-center items-center">
            <p className="animate-pulse">Loading...</p>
          </div>
        )}

        {post && (
          <>
            <div className="w-full lg:h-[26rem] h-[16rem] overflow-hidden relative flex justify-center">
              <img
                src={post.image_url ? post.image_url : BlogBG}
                className="absolute top-0 w-full h-full object-cover"
                alt=""
              />
              <div className="w-full h-full absolute top-0 right-0 bg-black bg-opacity-60" />
              <div className="w-full absolute lg:bottom-24 bottom-12 container lg:px-64 px-8">
                <p className="text-white text-4xl font-extrabold">{title}</p>
                <div className="flex flex-row mt-8 align-bottom">
                  <img src={Yan} className="rounded-full h-8 w-8 mr-4" alt="" />
                  <p className="text-white text-xl font-extrabold opacity-80">
                    Yan Zhang
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center my-24">
              <div className="w-full container lg:px-64 px-8">
                <div className="prose max-auto">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </PageContainer>
  );
}
