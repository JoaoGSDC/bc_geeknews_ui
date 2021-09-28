import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Loading />,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
];

const RichTextEditor = () => {
  return (
    <QuillNoSSRWrapper
      value={String(localStorage.getItem('matter'))}
      modules={modules}
      formats={formats}
      theme="snow"
      style={{ height: '90%' }}
      onChange={(value: any) => localStorage.setItem('matter', value)}
    />
  );
};

export default RichTextEditor;
