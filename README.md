# persian-validator
This library will help you validate your data by auto-generate a Persian error message

## install
```
npm i persian-validator
```

## simple example
import lib
```
const {FormItem,FormValidator} = require("./index")
```

create Form Validator with input validators info
```
let formValidator = new FormValidator([
    new FormItem("username", "نام کاربری")
        .require()
        .englishUsername()
    ])
```

validate input
```
console.log(formValidator.validate({username: "Mahdi"})) -> 
{
    isValid: true,
    validations: [
        {
            input_name: 'username',
            input_name_fa: 'نام کاربری',
            validator_name: 'require',
            isValid: true,
            error: undefined
        },
        {
            input_name: 'username',
            input_name_fa: 'نام کاربری',
            validator_name: 'englishUsername',
            isValid: true,
            error: undefined
        }
    ]
}

console.log(formValidator.validate({})) -> 
{
    isValid: false,
    validations: [
        {
            input_name: 'username',
            input_name_fa: 'نام کاربری',
            validator_name: 'require',
            isValid: false,
            error: undefined
        },
        {
            input_name: 'username',
            input_name_fa: 'نام کاربری',
            validator_name: 'englishUsername',
            isValid: true,
            error: 'نام کاربری فقط میتواند شامل حروف و اعداد انگیلیسی و - و - شود'
        }
    ]
}
```

## methods
this lib have lots of methods

###### require
```
new FormItem().require()
```

###### Iran
```
new FormItem().iranBankCard(str)
new FormItem().iranNtionalCode(str)
new FormItem().iranShaba(str)
new FormItem().iranPhone(str)
```

###### string
```
new FormItem().string()
new FormItem().minLength(num)
new FormItem().maxLength(num)
new FormItem().minOrEqualLength(num)
new FormItem().maxOrEqualLength(num)
new FormItem().starstWith(str)
new FormItem().endsWith(str)
```

###### array
```
new FormItem().array()
new FormItem().minArrayLength(num)
new FormItem().maxArrayLength(num)
new FormItem().minOrEqualArrayLength(num)
new FormItem().maxOrEqualArrayLength(num)
```

###### number
```
new FormItem().number()
new FormItem().min(num)
new FormItem().max(num)
new FormItem().minOrEqual(num)
new FormItem().maxOrEqual(num)
```

###### enums
```
new FormItem().enums(list)
```

###### email
```
new FormItem().email()
```

###### bool
```
new FormItem().bool()
```

###### English Username
```
new FormItem().englishUsername()
```

###### ip
```
new FormItem().ip()
```

###### url
```
new FormItem().url()
```

###### MongodbId
```
new FormItem().mongodbId()
```



## real world example
```
const {
    FormItem,
    FormValidator,
} = require("./index")

function main() {
    let formValidator = new FormValidator(
        [
            new FormItem("username", "نام کاربری").require().englishUsername(),
            new FormItem("age", "سن").number().max(100).min(18),
            new FormItem("name", "اسم").string().minOrEqualLength(2).maxOrEqualLength(32),
            new FormItem("bio", "بیوگرافی").string().maxLength(255),
            new FormItem("email", "ایمیل").email(),
            new FormItem("phone", "شماره همراه").require().iranPhone(),
            new FormItem("site", "سایت شخصی").url(),
            new FormItem("ip", "آیپی").ip(),
            new FormItem("gender", "جنسیت").enums("مرد", "زن"),
        ]
    )

    console.log(formValidator.validate({
        username: "Mahdi",
        age: 21,
        phone: "09181234567",
        name: "mahdi ghaemi",
        bio: ":)",
        email: "mahdighaemi123@gmail.com",
        site: "https://github.com/mahdighaemi123",
        ip: "127.0.0.1",
        gender: "مرد",
    })) -> {
        isValid: true,
        validations: [
            {
                input_name: 'username',
                input_name_fa: 'نام کاربری',
                validator_name: 'require',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'username',
                input_name_fa: 'نام کاربری',
                validator_name: 'englishUsername',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'number',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'max',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'min',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'string',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'minOrEqualLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'maxOrEqualLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'bio',
                input_name_fa: 'بیوگرافی',
                validator_name: 'string',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'bio',
                input_name_fa: 'بیوگرافی',
                validator_name: 'maxLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'email',
                input_name_fa: 'ایمیل',
                validator_name: 'email',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'phone',
                input_name_fa: 'شماره همراه',
                validator_name: 'require',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'phone',
                input_name_fa: 'شماره همراه',
                validator_name: 'iranPhone',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'site',
                input_name_fa: 'سایت شخصی',
                validator_name: 'url',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'ip',
                input_name_fa: 'آیپی',
                validator_name: 'ip',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'gender',
                input_name_fa: 'جنسیت',
                validator_name: 'enums',
                isValid: true,
                error: undefined
            }
        ]
    }

    -----------------------------------------------------

    console.log(formValidator.validate({
        username: null,
        age: null,
        phone: null,
        name: null,
        bio: null,
        email: null,
        site: null,
        ip: null,
        gender: null,
    })) -> {
        isValid: false,
        validations: [
            {
                input_name: 'username',
                input_name_fa: 'نام کاربری',
                validator_name: 'require',
                isValid: false,
                error: 'نام کاربری وارد نشده است'
            },
            {
                input_name: 'username',
                input_name_fa: 'نام کاربری',
                validator_name: 'englishUsername',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'number',
                isValid: false,
                error: 'سن فقط میتواند از نوع لیست باشد'
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'max',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'age',
                input_name_fa: 'سن',
                validator_name: 'min',
                isValid: false,
                error: 'سن حداقل میتواند 18 تعداد باشد'
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'string',
                isValid: false,
                error: 'اسم فقط میتواند از نوع متنی باشد'
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'minOrEqualLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'name',
                input_name_fa: 'اسم',
                validator_name: 'maxOrEqualLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'bio',
                input_name_fa: 'بیوگرافی',
                validator_name: 'string',
                isValid: false,
                error: 'بیوگرافی فقط میتواند از نوع متنی باشد'
            },
            {
                input_name: 'bio',
                input_name_fa: 'بیوگرافی',
                validator_name: 'maxLength',
                isValid: true,
                error: undefined
            },
            {
                input_name: 'email',
                input_name_fa: 'ایمیل',
                validator_name: 'email',
                isValid: false,
                error: 'فرمت ایمیل صحیح نیست'
            },
            {
                input_name: 'phone',
                input_name_fa: 'شماره همراه',
                validator_name: 'require',
                isValid: false,
                error: 'شماره همراه وارد نشده است'
            },
            {
                input_name: 'phone',
                input_name_fa: 'شماره همراه',
                validator_name: 'iranPhone',
                isValid: false,
                error: 'فرمت شماره همراه صحیح نیست'
            },
            {
                input_name: 'site',
                input_name_fa: 'سایت شخصی',
                validator_name: 'url',
                isValid: false,
                error: 'فرمت سایت شخصی صحیح نیست'
            },
            {
                input_name: 'ip',
                input_name_fa: 'آیپی',
                validator_name: 'ip',
                isValid: false,
                error: 'فرمت آیپی صحیح نیست'
            },
            {
                input_name: 'gender',
                input_name_fa: 'جنسیت',
                validator_name: 'enums',
                isValid: false,
                error: 'جنسیت فقط میتواند شامل مرد باشد'
            }
        ]
    }

main()

```