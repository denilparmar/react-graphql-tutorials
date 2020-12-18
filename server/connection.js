const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://denil:parmar@cluster0.ivchi.mongodb.net/sample_inventory_management?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});