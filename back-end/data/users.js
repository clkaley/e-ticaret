import bcrypt from 'bcryptjs'

const user=[
    {
        name:'Admin',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Hasan Kaya',
        email:'hasankaya@gmail.com',
        password:bcrypt.hashSync('123456',10),
       
    },
    {
        name:'Ayşenur Yıldız',
        email:'aysenuryildiz@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
]

export default user