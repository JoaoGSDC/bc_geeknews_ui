import multer from 'multer';

const ALLOWED_FORMAT = ['image/jpeg', 'image/png', 'image/jpg'];

const storage = multer.memoryStorage();
exports.upload = multer({
  storage,
  fileFilter: function (req: any, file: any, cb: any) {
    if (ALLOWED_FORMAT.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Not supported file format!'), false);
    }
  },
});
