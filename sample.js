const {
    FormItem,
    FormValidator,
} = require("./index")

function main() {
    let formValidator = new FormValidator(
        [
            new FormItem("username", "نام کاربری").require().englishAndNumberOnly(),
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

    console.log(formValidator.validate({}))
    console.log(formValidator.validate({ not_exist: 0 }))

    console.log(formValidator.validate({ site: "Opps" }, ["site"]))

    console.log(formValidator.validate({
        username: "Mahdi",
        phone: "09181234567"
    }))

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
    }))

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
    }))
}

main()