"use client";

import { Button, useToast } from "@/src/components/ui";
import { Form } from "@/src/components/ui/form";
import { Separator } from "@/src/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Setting } from "../setting";

export default function AccountSettings() {
  const { toast } = useToast();
  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthDate: z.string(),
    language: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      language: "",
    },
    resetOptions: {
      keepDirtyValues: true,
    },
  });
  const router = useRouter();

  useEffect(() => {
    form.reset({
      firstName: "",
      lastName: "",
    });
  }, []);

  useEffect(() => {
    form.reset(
      {
        firstName: "",
        lastName: "",
        birthDate: "",
        language: "",
      },
      {
        keepDirtyValues: true,
      }
    );
  }, []);

  return (
    <div className="max-w-2xl w-full">
      <div className="flex gap-1 mb-3 flex-col">
        <h1 className="mt-0 text-lg font-medium">Account</h1>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <Separator className="mb-3" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log("Submitted Form: ", data);
          })}
          className="space-y-5"
        >
          <Setting
            form={form}
            name="firstName"
            label="First name"
            placeholder="John"
            description="This is the first name that will be displayed on your profile
                  and in emails."
            type="text"
            className="max-w-[280px]"
          />
          <Setting
            form={form}
            name="lastName"
            label="Last name"
            placeholder="Doe"
            description="This is the last name that will be displayed on your profile
                  and in emails."
            type="text"
            className="max-w-[280px]"
          />
          <Setting
            form={form}
            name="birthDate"
            label="Date of birth"
            placeholder="Select a date"
            description="Your date of birth is used to calculate your age."
            type="birthDate"
          />
          <Setting
            form={form}
            name="language"
            label="Language"
            placeholder="Select a language"
            description="This is the language that will be used in the dashboard."
            type="select"
            data={languages}
          />
          <div className="flex sm:justify-start">
            <Button type="submit" className="mr-2">
              Save
            </Button>
            <Button
              type="reset"
              variant={"outline"}
              onClick={() => {
                form.reset(
                  {
                    firstName: "",
                    lastName: "",
                    birthDate: "",
                    language: "",
                  },
                  {
                    keepDirtyValues: false,
                  }
                );
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

const languages = [
  {
    label: "Abkhaz",
    value: "abkhaz",
    nativeName: "аҧсуа",
    code: "ab",
  },
  {
    label: "Afar",
    value: "afar",
    nativeName: "Afaraf",
    code: "aa",
  },
  {
    label: "Afrikaans",
    value: "afrikaans",
    nativeName: "Afrikaans",
    code: "af",
  },
  {
    label: "Akan",
    value: "akan",
    nativeName: "Akan",
    code: "ak",
  },
  {
    label: "Albanian",
    value: "albanian",
    nativeName: "Shqip",
    code: "sq",
  },
  {
    label: "Amharic",
    value: "amharic",
    nativeName: "አማርኛ",
    code: "am",
  },
  {
    label: "Arabic",
    value: "arabic",
    nativeName: "العربية",
    code: "ar",
  },
  {
    label: "Aragonese",
    value: "aragonese",
    nativeName: "Aragonés",
    code: "an",
  },
  {
    label: "Armenian",
    value: "armenian",
    nativeName: "Հայերեն",
    code: "hy",
  },
  {
    label: "Assamese",
    value: "assamese",
    nativeName: "অসমীয়া",
    code: "as",
  },
  {
    label: "Avaric",
    value: "avaric",
    nativeName: "авар мацӀ, магӀарул мацӀ",
    code: "av",
  },
  {
    label: "Avestan",
    value: "avestan",
    nativeName: "avesta",
    code: "ae",
  },
  {
    label: "Aymara",
    value: "aymara",
    nativeName: "aymar aru",
    code: "ay",
  },
  {
    label: "Azerbaijani",
    value: "azerbaijani",
    nativeName: "azərbaycan dili",
    code: "az",
  },
  {
    label: "Bambara",
    value: "bambara",
    nativeName: "bamanankan",
    code: "bm",
  },
  {
    label: "Bashkir",
    value: "bashkir",
    nativeName: "башҡорт теле",
    code: "ba",
  },
  {
    label: "Basque",
    value: "basque",
    nativeName: "euskara, euskera",
    code: "eu",
  },
  {
    label: "Belarusian",
    value: "belarusian",
    nativeName: "Беларуская",
    code: "be",
  },
  {
    label: "Bengali",
    value: "bengali",
    nativeName: "বাংলা",
    code: "bn",
  },
  {
    label: "Bihari",
    value: "bihari",
    nativeName: "भोजपुरी",
    code: "bh",
  },
  {
    label: "Bislama",
    value: "bislama",
    nativeName: "Bislama",
    code: "bi",
  },
  {
    label: "Bosnian",
    value: "bosnian",
    nativeName: "bosanski jezik",
    code: "bs",
  },
  {
    label: "Breton",
    value: "breton",
    nativeName: "brezhoneg",
    code: "br",
  },
  {
    label: "Bulgarian",
    value: "bulgarian",
    nativeName: "български език",
    code: "bg",
  },
  {
    label: "Burmese",
    value: "burmese",
    nativeName: "ဗမာစာ",
    code: "my",
  },
  {
    label: "Catalan; Valencian",
    value: "catalan; Valencian",
    nativeName: "Català",
    code: "ca",
  },
  {
    label: "Chamorro",
    value: "chamorro",
    nativeName: "Chamoru",
    code: "ch",
  },
  {
    label: "Chechen",
    value: "chechen",
    nativeName: "нохчийн мотт",
    code: "ce",
  },
  {
    label: "Chichewa; Chewa; Nyanja",
    value: "chichewa; Chewa; Nyanja",
    nativeName: "chiCheŵa, chinyanja",
    code: "ny",
  },
  {
    label: "Chinese",
    value: "chinese",
    nativeName: "中文 (Zhōngwén), 汉语, 漢語",
    code: "zh",
  },
  {
    label: "Chuvash",
    value: "chuvash",
    nativeName: "чӑваш чӗлхи",
    code: "cv",
  },
  {
    label: "Cornish",
    value: "cornish",
    nativeName: "Kernewek",
    code: "kw",
  },
  {
    label: "Corsican",
    value: "corsican",
    nativeName: "corsu, lingua corsa",
    code: "co",
  },
  {
    label: "Cree",
    value: "cree",
    nativeName: "ᓀᐦᐃᔭᐍᐏᐣ",
    code: "cr",
  },
  {
    label: "Croatian",
    value: "croatian",
    nativeName: "hrvatski",
    code: "hr",
  },
  {
    label: "Czech",
    value: "czech",
    nativeName: "česky, čeština",
    code: "cs",
  },
  {
    label: "Danish",
    value: "danish",
    nativeName: "dansk",
    code: "da",
  },
  {
    label: "Divehi; Dhivehi; Maldivian;",
    value: "divehi dhivehi; maldivian;",
    nativeName: "ދިވެހި",
    code: "dv",
  },
  {
    label: "Dutch",
    value: "dutch",
    nativeName: "Nederlands, Vlaams",
    code: "nl",
  },
  {
    label: "English",
    value: "english",
    nativeName: "English",
    code: "en",
  },
  {
    label: "Esperanto",
    value: "esperanto",
    nativeName: "Esperanto",
    code: "eo",
  },
  {
    label: "Estonian",
    value: "estonian",
    nativeName: "eesti, eesti keel",
    code: "et",
  },
  {
    label: "Ewe",
    value: "ewe",
    nativeName: "Eʋegbe",
    code: "ee",
  },
  {
    label: "Faroese",
    value: "faroese",
    nativeName: "føroyskt",
    code: "fo",
  },
  {
    label: "Fijian",
    value: "fijian",
    nativeName: "vosa Vakaviti",
    code: "fj",
  },
  {
    label: "Finnish",
    value: "finnish",
    nativeName: "suomi, suomen kieli",
    code: "fi",
  },
  {
    label: "French",
    value: "french",
    nativeName: "français, langue française",
    code: "fr",
  },
  {
    label: "Fula; Fulah; Pulaar; Pular",
    value: "fula fulah pulaar pular",
    nativeName: "Fulfulde, Pulaar, Pular",
    code: "ff",
  },
  {
    label: "Galician",
    value: "galician",
    nativeName: "Galego",
    code: "gl",
  },
  {
    label: "Georgian",
    value: "georgian",
    nativeName: "ქართული",
    code: "ka",
  },
  {
    label: "German",
    value: "german",
    nativeName: "Deutsch",
    code: "de",
  },
  {
    label: "Greek, Modern",
    value: "greek modern",
    nativeName: "Ελληνικά",
    code: "el",
  },
  {
    label: "Guaraní",
    value: "guaraní",
    nativeName: "Avañeẽ",
    code: "gn",
  },
  {
    label: "Gujarati",
    value: "gujarati",
    nativeName: "ગુજરાતી",
    code: "gu",
  },
  {
    label: "Haitian; Haitian Creole",
    value: "haitian haitian creole",
    nativeName: "Kreyòl ayisyen",
    code: "ht",
  },
  {
    label: "Hausa",
    value: "hausa",
    nativeName: "Hausa, هَوُسَ",
    code: "ha",
  },
  {
    label: "Hebrew (modern)",
    value: "hebrew modern",
    nativeName: "עברית",
    code: "he",
  },
  {
    label: "Herero",
    value: "herero",
    nativeName: "Otjiherero",
    code: "hz",
  },
  {
    label: "Hindi",
    value: "hindi",
    nativeName: "हिन्दी, हिंदी",
    code: "hi",
  },
  {
    label: "Hiri Motu",
    value: "hiri motu",
    nativeName: "Hiri Motu",
    code: "ho",
  },
  {
    label: "Hungarian",
    value: "hungarian",
    nativeName: "Magyar",
    code: "hu",
  },
  {
    label: "Interlingua",
    value: "interlingua",
    nativeName: "Interlingua",
    code: "ia",
  },
  {
    label: "Indonesian",
    value: "indonesian",
    nativeName: "Bahasa Indonesia",
    code: "id",
  },
  {
    label: "Interlingue",
    value: "interlingue",
    nativeName: "Originally called Occidental; then Interlingue after WWII",
    code: "ie",
  },
  {
    label: "Irish",
    value: "irish",
    nativeName: "Gaeilge",
    code: "ga",
  },
  {
    label: "Igbo",
    value: "igbo",
    nativeName: "Asụsụ Igbo",
    code: "ig",
  },
  {
    label: "Inupiaq",
    value: "inupiaq",
    nativeName: "Iñupiaq, Iñupiatun",
    code: "ik",
  },
  {
    label: "Ido",
    value: "ido",
    nativeName: "Ido",
    code: "io",
  },
  {
    label: "Icelandic",
    value: "icelandic",
    nativeName: "Íslenska",
    code: "is",
  },
  {
    label: "Italian",
    value: "italian",
    nativeName: "Italiano",
    code: "it",
  },
  {
    label: "Inuktitut",
    value: "inuktitut",
    nativeName: "ᐃᓄᒃᑎᑐᑦ",
    code: "iu",
  },
  {
    label: "Japanese",
    value: "japanese",
    nativeName: "日本語 (にほんご／にっぽんご)",
    code: "ja",
  },
  {
    label: "Javanese",
    value: "javanese",
    nativeName: "basa Jawa",
    code: "jv",
  },
  {
    label: "Kalaallisut, Greenlandic",
    value: "kalaallisut greenlandic",
    nativeName: "kalaallisut, kalaallit oqaasii",
    code: "kl",
  },
  {
    label: "Kannada",
    value: "kannada",
    nativeName: "ಕನ್ನಡ",
    code: "kn",
  },
  {
    label: "Kanuri",
    value: "kanuri",
    nativeName: "Kanuri",
    code: "kr",
  },
  {
    label: "Kashmiri",
    value: "kashmiri",
    nativeName: "कश्मीरी, كشميري‎",
    code: "ks",
  },
  {
    label: "Kazakh",
    value: "kazakh",
    nativeName: "Қазақ тілі",
    code: "kk",
  },
  {
    label: "Khmer",
    value: "khmer",
    nativeName: "ភាសាខ្មែរ",
    code: "km",
  },
  {
    label: "Kikuyu, Gikuyu",
    value: "kikuyu, Gikuyu",
    nativeName: "Gĩkũyũ",
    code: "ki",
  },
  {
    label: "Kinyarwanda",
    value: "kinyarwanda",
    nativeName: "Ikinyarwanda",
    code: "rw",
  },
  {
    label: "Kirghiz, Kyrgyz",
    value: "kirghiz, Kyrgyz",
    nativeName: "кыргыз тили",
    code: "ky",
  },
  {
    label: "Komi",
    value: "komi",
    nativeName: "коми кыв",
    code: "kv",
  },
  {
    label: "Kongo",
    value: "kongo",
    nativeName: "KiKongo",
    code: "kg",
  },
  {
    label: "Korean",
    value: "korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
    code: "ko",
  },
  {
    label: "Kurdish",
    value: "kurdish",
    nativeName: "Kurdî, كوردی‎",
    code: "ku",
  },
  {
    label: "Kwanyama, Kuanyama",
    value: "kwanyama kuanyama",
    nativeName: "Kuanyama",
    code: "kj",
  },
  {
    label: "Latin",
    value: "latin",
    nativeName: "latine, lingua latina",
    code: "la",
  },
  {
    label: "Luxembourgish, Letzeburgesch",
    value: "luxembourgish letzeburgesch",
    nativeName: "Lëtzebuergesch",
    code: "lb",
  },
  {
    label: "Luganda",
    value: "luganda",
    nativeName: "Luganda",
    code: "lg",
  },
  {
    label: "Limburgish, Limburgan, Limburger",
    value: "limburgish limburgan limburger",
    nativeName: "Limburgs",
    code: "li",
  },
  {
    label: "Lingala",
    value: "lingala",
    nativeName: "Lingála",
    code: "ln",
  },
  {
    label: "Lao",
    value: "lao",
    nativeName: "ພາສາລາວ",
    code: "lo",
  },
  {
    label: "Lithuanian",
    value: "lithuanian",
    nativeName: "lietuvių kalba",
    code: "lt",
  },
  {
    label: "Luba-Katanga",
    value: "luba katanga",
    nativeName: "",
    code: "lu",
  },
  {
    label: "Latvian",
    value: "latvian",
    nativeName: "latviešu valoda",
    code: "lv",
  },
  {
    label: "Manx",
    value: "manx",
    nativeName: "Gaelg, Gailck",
    code: "gv",
  },
  {
    label: "Macedonian",
    value: "macedonian",
    nativeName: "македонски јазик",
    code: "mk",
  },
  {
    label: "Malagasy",
    value: "malagasy",
    nativeName: "Malagasy fiteny",
    code: "mg",
  },
  {
    label: "Malay",
    value: "malay",
    nativeName: "bahasa Melayu, بهاس ملايو‎",
    code: "ms",
  },
  {
    label: "Malayalam",
    value: "malayalam",
    nativeName: "മലയാളം",
    code: "ml",
  },
  {
    label: "Maltese",
    value: "maltese",
    nativeName: "Malti",
    code: "mt",
  },
  {
    label: "Māori",
    value: "maori",
    nativeName: "te reo Māori",
    code: "mi",
  },
  {
    label: "Marathi (Marāṭhī)",
    value: "marathi",
    nativeName: "मराठी",
    code: "mr",
  },
  {
    label: "Marshallese",
    value: "marshallese",
    nativeName: "Kajin M̧ajeļ",
    code: "mh",
  },
  {
    label: "Mongolian",
    value: "mongolian",
    nativeName: "монгол",
    code: "mn",
  },
  {
    label: "Nauru",
    value: "nauru",
    nativeName: "Ekakairũ Naoero",
    code: "na",
  },
  {
    label: "Navajo, Navaho",
    value: "navajo navaho",
    nativeName: "Diné bizaad, Dinékʼehǰí",
    code: "nv",
  },
  {
    label: "Norwegian Bokmål",
    value: "norwegian bokmal",
    nativeName: "Norsk bokmål",
    code: "nb",
  },
  {
    label: "North Ndebele",
    value: "north ndebele",
    nativeName: "isiNdebele",
    code: "nd",
  },
  {
    label: "Nepali",
    value: "nepali",
    nativeName: "नेपाली",
    code: "ne",
  },
  {
    label: "Ndonga",
    value: "ndonga",
    nativeName: "Owambo",
    code: "ng",
  },
  {
    label: "Norwegian Nynorsk",
    value: "norwegian nynorsk",
    nativeName: "Norsk nynorsk",
    code: "nn",
  },
  {
    label: "Norwegian",
    value: "norwegian",
    nativeName: "Norsk",
    code: "no",
  },
  {
    label: "Nuosu",
    value: "nuosu",
    nativeName: "ꆈꌠ꒿ Nuosuhxop",
    code: "ii",
  },
  {
    label: "South Ndebele",
    value: "south ndebele",
    nativeName: "isiNdebele",
    code: "nr",
  },
  {
    label: "Occitan",
    value: "occitan",
    nativeName: "Occitan",
    code: "oc",
  },
  {
    label: "Ojibwe, Ojibwa",
    value: "ojibwe ojibwa",
    nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
    code: "oj",
  },
  {
    label:
      "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    value:
      "old church slavonic church slavic church slavonic old bulgarian old slavonic",
    nativeName: "ѩзыкъ словѣньскъ",
    code: "cu",
  },
  {
    label: "Oromo",
    value: "oromo",
    nativeName: "Afaan Oromoo",
    code: "om",
  },
  {
    label: "Oriya",
    value: "oriya",
    nativeName: "ଓଡ଼ିଆ",
    code: "or",
  },
  {
    label: "Ossetian, Ossetic",
    value: "ossetian ossetic",
    nativeName: "ирон æвзаг",
    code: "os",
  },
  {
    label: "Panjabi, Punjabi",
    value: "panjabi punjabi",
    nativeName: "ਪੰਜਾਬੀ, پنجابی‎",
    code: "pa",
  },
  {
    label: "Pāli",
    value: "pali",
    nativeName: "पाऴि",
    code: "pi",
  },
  {
    label: "Persian",
    value: "persian",
    nativeName: "فارسی",
    code: "fa",
  },
  {
    label: "Polish",
    value: "polish",
    nativeName: "polski",
    code: "pl",
  },
  {
    label: "Pashto, Pushto",
    value: "pashto pushto",
    nativeName: "پښتو",
    code: "ps",
  },
  {
    label: "Portuguese",
    value: "portuguese",
    nativeName: "Português",
    code: "pt",
  },
  {
    label: "Quechua",
    value: "quechua",
    nativeName: "Runa Simi, Kichwa",
    code: "qu",
  },
  {
    label: "Romansh",
    value: "romansh",
    nativeName: "rumantsch grischun",
    code: "rm",
  },
  {
    label: "Kirundi",
    value: "Kirundi",
    nativeName: "kiRundi",
    code: "rn",
  },
  {
    label: "Romanian, Moldavian, Moldovan",
    value: "romanian moldavian moldovan",
    nativeName: "română",
    code: "ro",
  },
  {
    label: "Russian",
    value: "russian",
    nativeName: "русский язык",
    code: "ru",
  },
  {
    label: "Sanskrit (Saṁskṛta)",
    value: "sanskrit samskrta",
    nativeName: "संस्कृतम्",
    code: "sa",
  },
  {
    label: "Sardinian",
    value: "sardinian",
    nativeName: "sardu",
    code: "sc",
  },
  {
    label: "Sindhi",
    value: "sindhi",
    nativeName: "सिन्धी, سنڌي، سندھی‎",
    code: "sd",
  },
  {
    label: "Northern Sami",
    value: "northern sami",
    nativeName: "Davvisámegiella",
    code: "se",
  },
  {
    label: "Samoan",
    value: "samoan",
    nativeName: "gagana faa Samoa",
    code: "sm",
  },
  {
    label: "Sango",
    value: "sango",
    nativeName: "yângâ tî sängö",
    code: "sg",
  },
  {
    label: "Serbian",
    value: "serbian",
    nativeName: "српски језик",
    code: "sr",
  },
  {
    label: "Scottish Gaelic; Gaelic",
    value: "scottish gaelic",
    nativeName: "Gàidhlig",
    code: "gd",
  },
  {
    label: "Shona",
    value: "shona",
    nativeName: "chiShona",
    code: "sn",
  },
  {
    label: "Sinhala, Sinhalese",
    value: "sinhala sinhalese",
    nativeName: "සිංහල",
    code: "si",
  },
  {
    label: "Slovak",
    value: "slovak",
    nativeName: "slovenčina",
    code: "sk",
  },
  {
    label: "Slovene",
    value: "slovene",
    nativeName: "slovenščina",
    code: "sl",
  },
  {
    label: "Somali",
    value: "somali",
    nativeName: "Soomaaliga, af Soomaali",
    code: "so",
  },
  {
    label: "Southern Sotho",
    value: "southern sotho",
    nativeName: "Sesotho",
    code: "st",
  },
  {
    label: "Spanish; Castilian",
    value: "spanish castilian",
    nativeName: "español, castellano",
    code: "es",
  },
  {
    label: "Sundanese",
    value: "sundanese",
    nativeName: "Basa Sunda",
    code: "su",
  },
  {
    label: "Swahili",
    value: "swahili",
    nativeName: "Kiswahili",
    code: "sw",
  },
  {
    label: "Swati",
    value: "swati",
    nativeName: "SiSwati",
    code: "ss",
  },
  {
    label: "Swedish",
    value: "swedish",
    nativeName: "svenska",
    code: "sv",
  },
  {
    label: "Tamil",
    value: "tamil",
    nativeName: "தமிழ்",
    code: "ta",
  },
  {
    label: "Telugu",
    value: "telugu",
    nativeName: "తెలుగు",
    code: "te",
  },
  {
    label: "Tajik",
    value: "tajik",
    nativeName: "тоҷикӣ, toğikī, تاجیکی‎",
    code: "tg",
  },
  {
    label: "Thai",
    value: "thai",
    nativeName: "ไทย",
    code: "th",
  },
  {
    label: "Tigrinya",
    value: "tigrinya",
    nativeName: "ትግርኛ",
    code: "ti",
  },
  {
    label: "Tibetan Standard, Tibetan, Central",
    value: "tibetan standard tibetan central",
    nativeName: "བོད་ཡིག",
    code: "bo",
  },
  {
    label: "Turkmen",
    value: "turkmen",
    nativeName: "Türkmen, Түркмен",
    code: "tk",
  },
  {
    label: "Tagalog",
    value: "tagalog",
    nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
    code: "tl",
  },
  {
    label: "Tswana",
    value: "tswana",
    nativeName: "Setswana",
    code: "tn",
  },
  {
    label: "Tonga (Tonga Islands)",
    value: "tonga tonga islands",
    nativeName: "faka Tonga",
    code: "to",
  },
  {
    label: "Turkish",
    value: "turkish",
    nativeName: "Türkçe",
    code: "tr",
  },
  {
    label: "Tsonga",
    value: "tsonga",
    nativeName: "Xitsonga",
    code: "ts",
  },
  {
    label: "Tatar",
    value: "tatar",
    nativeName: "татарча, tatarça, تاتارچا‎",
    code: "tt",
  },
  {
    label: "Twi",
    value: "twi",
    nativeName: "Twi",
    code: "tw",
  },
  {
    label: "Tahitian",
    value: "tahitian",
    nativeName: "Reo Tahiti",
    code: "ty",
  },
  {
    label: "Uighur, Uyghur",
    value: "uighur uyghur",
    nativeName: "Uyƣurqə, ئۇيغۇرچە‎",
    code: "ug",
  },
  {
    label: "Ukrainian",
    value: "ukrainian",
    nativeName: "українська",
    code: "uk",
  },
  {
    label: "Urdu",
    value: "urdu",
    nativeName: "اردو",
    code: "ur",
  },
  {
    label: "Uzbek",
    value: "uzbek",
    nativeName: "zbek, Ўзбек, أۇزبېك‎",
    code: "uz",
  },
  {
    label: "Venda",
    value: "venda",
    nativeName: "Tshivenḓa",
    code: "ve",
  },
  {
    label: "Vietlabelse",
    value: "vietvaluese",
    nativeName: "Tiếng Việt",
    code: "vi",
  },
  {
    label: "Volapük",
    value: "volapuk",
    nativeName: "Volapük",
    code: "vo",
  },
  {
    label: "Walloon",
    value: "walloon",
    nativeName: "Walon",
    code: "wa",
  },
  {
    label: "Welsh",
    value: "welsh",
    nativeName: "Cymraeg",
    code: "cy",
  },
  {
    label: "Wolof",
    value: "wolof",
    nativeName: "Wollof",
    code: "wo",
  },
  {
    label: "Western Frisian",
    value: "western frisian",
    nativeName: "Frysk",
    code: "fy",
  },
  {
    label: "Xhosa",
    value: "xhosa",
    nativeName: "isiXhosa",
    code: "xh",
  },
  {
    label: "Yiddish",
    value: "yiddish",
    nativeName: "ייִדיש",
    code: "yi",
  },
  {
    label: "Yoruba",
    value: "yoruba",
    nativeName: "Yorùbá",
    code: "yo",
  },
  {
    label: "Zhuang, Chuang",
    value: "zhuang chuang",
    nativeName: "Saɯ cueŋƅ, Saw cuengh",
    code: "za",
  },
];
