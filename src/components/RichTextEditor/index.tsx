import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <p>Loading ...</p>,
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

interface IPropsDTO {
  onChange: any;
}

const RichTextEditor = ({ onChange }: IPropsDTO) => {
  return (
    <QuillNoSSRWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      style={{ height: '90%' }}
      onChange={(value: any) => onChange(value)}
    />
  );
};

export default RichTextEditor;
