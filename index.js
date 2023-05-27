const BooleanValidator = require("./validators/boolean.validator")
const EmailValidator = require("./validators/email.validator")
const EnglishAndNumberOnlyValidator = require("./validators/englishAndNumberOnly.validator")
const EnumValidator = require("./validators/enum.validator")
const IpValidator = require("./validators/ip.validator")
const IranBankCardValidator = require("./validators/iranBankCard.validator")
const IranNationalCodeValidator = require("./validators/iranNationalCode.validator")
const IranPhoneValidator = require("./validators/iranPhone.validator")
const IranShabaValidator = require("./validators/iranShaba.validator")
const MongodbIdValidator = require("./validators/mongodbId.validator")
const ArrayValidator = require("./validators/mongodbId.validator")
const NumberValidator = require("./validators/number.validator")
const StringValidator = require("./validators/string.validator")
const UrlValidator = require("./validators/url.validator")
const RequireValidator = require("./validators/require.validator")

const validators = []

validators.push(...[
    {
        name: "string",
        validate: StringValidator.validateString,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند از نوع متنی باشد`
    }, {
        name: "minLength",
        validate: StringValidator.validateMinLength,
        error: (name, name_fa, validatorInput) => `${name_fa} حداقل میتواند ${validatorInput} کاراکتر باشد`
    }, {
        name: "maxLength",
        validate: StringValidator.validateMaxLength,
        error: (name, name_fa, validatorInput) => `${name_fa} حداکثر میتواند ${validatorInput} کاراکتر باشد`
    }, {
        name: "minOrEqualLength",
        validate: StringValidator.validateMinOrEqualLength,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل حداکثر از ${validatorInput} کاراکتر باشد`
    }, {
        name: "maxOrEqualLength",
        validate: StringValidator.validateMaxOrEqualLength,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل  حداثل از ${validatorInput} کاراکتر باشد`
    }, {
        name: "starstWith",
        validate: StringValidator.validateStartsWith,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند با ${validatorInput} شروع شود`
    }, {
        name: "endsWith",
        validate: StringValidator.validateEndsWith,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند با ${validatorInput} پایان یابد`
    },
])


validators.push(...[
    {
        name: "array",
        validate: ArrayValidator.validateArray,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند از نوع لیست باشد`
    }, {
        name: "minArrayLength",
        validate: ArrayValidator.validateMinArrayLength,
        error: (name, name_fa, validatorInput) => `${name_fa} حداقل میتواند ${validatorInput} تعداد باشد`
    }, {
        name: "maxArrayLength",
        validate: ArrayValidator.validateMaxArrayLength,
        error: (name, name_fa, validatorInput) => `${name_fa} حداکثر میتواند ${validatorInput} تعداد باشد`
    }, {
        name: "minOrEqualArrayLength",
        validate: ArrayValidator.validateMinOrEqualArrayLength,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل حداکثر از ${validatorInput} تعداد باشد`
    }, {
        name: "maxOrEqualArrayLength",
        validate: ArrayValidator.validateMaxOrEqualArrayLength,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل  حداثل از ${validatorInput} تعداد باشد`
    },
])


validators.push(...[
    {
        name: "number",
        validate: NumberValidator.validateNumber,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند از نوع لیست باشد`
    }, {
        name: "min",
        validate: NumberValidator.validateMin,
        error: (name, name_fa, validatorInput) => `${name_fa} حداقل میتواند ${validatorInput} تعداد باشد`
    }, {
        name: "max",
        validate: NumberValidator.validateMax,
        error: (name, name_fa, validatorInput) => `${name_fa} حداکثر میتواند ${validatorInput} تعداد باشد`
    }, {
        name: "minOrEqual",
        validate: NumberValidator.validateMinOrEqual,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل حداکثر از ${validatorInput} تعداد باشد`
    }, {
        name: "maxOrEqual",
        validate: NumberValidator.validateMaxOrEqual,
        error: (name, name_fa, validatorInput) => `${name_fa} میتواند شامل  حداثل از ${validatorInput} تعداد باشد`
    },
])


validators.push(...[
    {
        name: "require",
        validate: RequireValidator.validateRequire,
        error: (name, name_fa, validatorInput) => `${name_fa} وارد نشده است`
    }
])


validators.push(...[
    {
        name: "enums",
        validate: EnumValidator.validateEnums,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند شامل ${validatorInput} باشد`
    }
])


validators.push(...[
    {
        name: "email",
        validate: EmailValidator.validateEmail,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])


validators.push(...[
    {
        name: "bool",
        validate: BooleanValidator.validateBool,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])


validators.push(...[
    {
        name: "englishAndNumberOnly",
        validate: EnglishAndNumberOnlyValidator.validateEnglishAndNumberOnly,
        error: (name, name_fa, validatorInput) => `${name_fa} فقط میتواند شامل حروف و اعداد انگیلیسی و - و - شود`
    }
])


validators.push(...[
    {
        name: "ip",
        validate: IpValidator.validateIp,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])


validators.push(...[
    {
        name: "url",
        validate: UrlValidator.validateURL,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])


validators.push(...[
    {
        name: "iranBankCard",
        validate: IranBankCardValidator.validateIranBankCard,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }, {
        name: "iranNtionalCode",
        validate: IranNationalCodeValidator.validatenNtionalCode,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }, {
        name: "iranShaba",
        validate: IranShabaValidator.validateShaba,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }, {
        name: "iranPhone",
        validate: IranPhoneValidator.validateIranPhone,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])


validators.push(...[
    {
        name: "mongodbId",
        validate: MongodbIdValidator.validateMongoDbId,
        error: (name, name_fa, validatorInput) => `فرمت ${name_fa} صحیح نیست`
    }
])



class FormItem {
    constructor(name, name_fa) {
        let itemOption = this
        itemOption.name = name
        itemOption.name_fa = name_fa
        itemOption.requireValidators = []
        itemOption.validatorsInput = {}

        for (let validator of validators) {
            itemOption[validator.name] = function (validatorInput = true) {
                itemOption.requireValidators.push(validator.name)
                itemOption.validatorsInput[validator.name] = validatorInput
                return itemOption
            }
        }

        return itemOption
    }
}


class FormValidator {

    constructor(formValidatorItemOptions = []) {
        this.formValidatorItemOptions = formValidatorItemOptions
    }

    addFormItem(formValidatorItemOption) {
        this.formValidatorItemOptions.push(formValidatorItemOption)
    }

    validate = function (inputValues = {}, validateRequires = undefined) {
        let validateItems = []

        let validations = []
        let isValid = true

        if (validateRequires)
            for (let validateRequire of validateRequires) {
                validateItems.push(validateRequire)
            }

        if (!validateRequires)
            for (let formValidatorItemOption of this.formValidatorItemOptions) {
                validateItems.push(formValidatorItemOption.name)
            }

        for (let validateItem of validateItems) {
            const formValidatorItemOption = this.formValidatorItemOptions.find(option => option.name == validateItem)
            const validatorsData = formValidatorItemOption.validatorsInput
            const inputValue = validateItem in inputValues ? inputValues[validateItem] : undefined
            const requireValidators = formValidatorItemOption.requireValidators
            const required = requireValidators.find(requireValidator => requireValidator == "require")

            if (validateRequires || (required || !required && inputValue !== undefined)) {
                let isItemValid = true
                for (let validatorName of requireValidators) {
                    let validator = validators.find(validator => validator.name == validatorName)
                    let validatorData = validatorsData[validator.name]
                    let validateResult = validator.validate(...[inputValue, validatorData])

                    validations.push({
                        input_name: formValidatorItemOption.name,
                        input_name_fa: formValidatorItemOption.name_fa,
                        validator_name: validator.name,
                        isValid: validateResult,
                        error: !validateResult ? validator.error(
                            formValidatorItemOption.name,
                            formValidatorItemOption.name_fa,
                            validatorData
                        ) : undefined
                    })

                    isItemValid &&= validateResult
                }

                isValid &&= isItemValid
            }
        }

        let result = { isValid, validations }

        return result
    }

}


module.exports = {
    FormItem,
    FormValidator,

    BooleanValidator,
    EmailValidator,
    EnglishAndNumberOnlyValidator,
    EnumValidator,
    IpValidator,

    IranBankCardValidator,
    IranNationalCodeValidator,
    IranPhoneValidator,
    IranShabaValidator,
    MongodbIdValidator,
    ArrayValidator,
    NumberValidator,
    StringValidator,
    UrlValidator,
    RequireValidator,
}