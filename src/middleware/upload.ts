import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import util from 'util';

const storage = new GridFsStorage({
  url: `${String(process.env.BASE_URL)}/${String(process.env.MONGODB_DB)}`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req: any, file: any) => {
      console.log('teste')
    const match = ['image/png', 'image/jpeg', 'image/wbm', 'image/avif'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

const uploadFiles = multer({ storage: storage }).single('file');
const uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;
