import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Temp')
  },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })
  
export  const upload = multer( {storage})

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Temp2')
  },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })
  
export  const upload1 = multer( {storage1})