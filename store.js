const express = require('express');
const app = express();
const products = [  
    {"id":01 ,"productName": "oil" , "Price": "1.2" , "Amount": "13"  },
    {"id":02 ,"productName": "flour" , "Price": "2.1" , "Amount": "31"  },
    {"id":03 ,"productName": "sugar" , "Price": "3.3" , "Amount": "22"  },
    {"id":04 ,"productName": "bread" , "Price": "2.6" , "Amount": "20"  },
    {"id":05 ,"productName": "chocolate" , "Price": "2.5" , "Amount": "15"  },
    {"id":06 ,"productName": "tea" , "Price": "0.7" , "Amount": "11"  },
    {"id":07 ,"productName": "milk" , "Price": "0.9" , "Amount": "12"  },
    {"id":08 ,"productName": "potato" , "Price": "1" , "Amount": "8"  },
    {"id":09 ,"productName": "macaroni" , "Price": "4.1" , "Amount": "4"  },
    {"id":10 ,"productName": "salt" , "Price": "3.1" , "Amount": "2"  }
];
app.get('/products', function (req, res) {
  res.send(JSON.stringify(products));
});
app.get('/products/:id', function (req, res) {
  res.send(JSON.stringify(products.find((products) => products.id == req.params.id)));
});
app.listen(3020, function () {
    console.log('Example app listening on port 3020!');
  });



