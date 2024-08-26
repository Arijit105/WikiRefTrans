document.getElementById('translateButton').addEventListener('click', function() {
    const sourceLang = document.getElementById('sourceLang').value;
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText;

    switch (sourceLang) {
        case 'e2b':
            outputText = translateToBengaliTemplate(inputText);
            break;
        case 'e2h':
            outputText = translateToHindiTemplate(inputText);
            break;
        case 'b2h':
            outputText = translateToHindiFromBengali(inputText);
            break;
        case 'h2b':
            outputText = translateToBengaliFromHindi(inputText);
            break;
        case 'h2e':
            outputText = reverseTranslateTemplate(inputText);
            break;
    }

    document.getElementById('outputText').value = outputText;
});

function translateToBengaliTemplate(inputText) {
    // Translation logic from e2b.js
    const translations = {
        '{{cite book': '{{সাময়িকী উদ্ধৃতি',
        '{{cite web': '{{ওয়েব উদ্ধৃতি',
        '{{cite news': '{{সংবাদ উদ্ধৃতি',
        '{{cite journal': '{{সাময়িকী উদ্ধৃতি',
        'date': 'তারিখ',
        'access': 'সংগ্রহের',
        'archive': 'আর্কাইভের',
        'website': 'ওয়েবসাইট',
        'title': 'শিরোনাম',
        'last': 'শেষাংশ',
        'first': 'প্রথমাংশ',
        'editor': 'সম্পাদক',
        'page': 'পাতা',
        'pages': 'পাতাসমূহ',
        'author': 'লেখক',
        'location': 'অবস্থান',
        'isbn': 'আইএসবিএন',
        'lccn': 'এলসিসিএন',
        'language': 'তারিখ',
        'quote': 'উক্তি',
        'status': 'অবস্থা',
        'live': 'কার্যকর',
        '=dead': '=অকার্যকর',
        '= dead': '= অকার্যকর',
        'agency': 'এজেন্সি',
        'publisher': 'প্রকাশক',
        'trans': 'অনূদিত',
        'work': 'কর্ম',
        'volume': 'সংস্করণ',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০',
        'January': 'জানুয়ারি',
        'February': 'ফেব্রুয়ারী',
        'March': 'মার্চ',
        'April': 'এপ্রিল',
        'May': 'মে',
        'June': 'জুন',
        'July': 'জুলাই',
        'August': 'অগাস্ট',
        'September': 'সেপ্টেম্বর',
        'October': 'অক্টোবর',
        'November': 'নভেম্বর',
        'December': 'ডিসেম্বর',
        'url': 'ইউআরএল'
    };

    for (const [enTemplate, bnTemplate] of Object.entries(translations)) {
        const regex = new RegExp(enTemplate, 'gi');
        inputText = inputText.replace(regex, bnTemplate);
    }

    return inputText;
}

function translateToHindiTemplate(inputText) {
    // Translation logic from e2h.js
    const translations = {
        '{{cite book': '{{साँचा:Cite book',
        '{{cite web': '{{साँचा:Cite web',
        '{{cite news': '{{साँचा:Cite news',
        '{{cite journal': '{{साँचा:Cite journal',
        'date': 'तारीख',
        'access-date': 'पहुंच तिथि',
        'archive-date': 'आर्काइव तिथि',
        'website': 'वेबसाइट',
        'title': 'शीर्षक',
        'last': 'अंतिम',
        'first': 'प्रथम',
        'editor': 'संपादक',
        'page': 'पृष्ठ',
        'pages': 'पृष्ठों',
        'author': 'लेखक',
        'location': 'स्थान',
        'isbn': 'आईएसबीएन',
        'lccn': 'एलसीसीएन',
        'language': 'भाषा',
        'quote': 'उद्धरण',
        'status': 'स्थिति',
        'live': 'सक्रिय',
        '=dead': '= मृत',
        'agency': 'एजेंसी',
        'publisher': 'प्रकाशक',
        'trans': 'अनुवादित',
        'work': 'कार्य',
        'volume': 'संस्करण',
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०',
        'January': 'जनवरी',
        'February': 'फरवरी',
        'March': 'मार्च',
        'April': 'अप्रैल',
        'May': 'मई',
        'June': 'जून',
        'July': 'जुलाई',
        'August': 'अगस्त',
        'September': 'सितंबर',
        'October': 'अक्टूबर',
        'November': 'नवंबर',
        'December': 'दिसंबर',
        'url': 'यूआरएल'
    };

    for (const [enTemplate, hiTemplate] of Object.entries(translations)) {
        const regex = new RegExp(enTemplate, 'gi');
        inputText = inputText.replace(regex, hiTemplate);
    }

    return inputText;
}

function translateToHindiFromBengali(inputText) {
    // Translation logic from b2h.js
    const translationsReverse = {
        '{{সাময়িকী উদ্ধৃতি': '{{cite book',
        '{{ওয়েব উদ্ধৃতি': '{{cite web',
        '{{সংবাদ উদ্ধৃতি': '{{cite news',
        '{{সংবাদ উদ্ধৃতি': '{{cite news',
        '{{সাময়িকী উদ্ধৃতি': '{{cite journal',
        'তারিখ': 'date',
        'সংগ্রহের': 'access',
        'আর্কাইভের': 'archive',
        'ওয়েবসাইট': 'website',
        'শিরোনাম': 'title',
        'শেষাংশ': 'last',
        'প্রথমাংশ': 'first',
        'সম্পাদক': 'editor',
        'পাতা': 'page',
        'পাতাসমূহ': 'pages',
        'লেখক': 'author',
        'অবস্থান': 'location',
        'আইএসবিএন': 'isbn',
        'এলসিসিএন': 'lccn',
        'ভাষা': 'language',
        'উক্তি': 'quote',
        'অবস্থা': 'status',
        'কার্যকর': 'live',
        '=অকার্যকর': '=dead',
        '= অকার্যকর': '= dead',
        'এজেন্সি': 'agency',
        'প্রকাশক': 'publisher',
        'অনূদিত': 'trans',
        'কর্ম': 'work',
        'সংস্করণ': 'volume',
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0',
        'জানুয়ারি': 'January',
        'ফেব্রুয়ারী': 'February',
        'মার্চ': 'March',
        'এপ্রিল': 'April',
        'মে': 'May',
        'জুন': 'June',
        'জুলাই': 'July',
        'অগাস্ট': 'August',
        'সেপ্টেম্বর': 'September',
        'অক্টোবর': 'October',
        'নভেম্বর': 'November',
        'ডিসেম্বর': 'December',
        'ইউআরএল': 'url'
    };

    for (const [bnTemplate, enTemplate] of Object.entries(translationsReverse)) {
        const regex = new RegExp(bnTemplate, 'gi');
        inputText = inputText.replace(regex, enTemplate);
    }

    return inputText;
}

function translateToBengaliFromHindi(inputText) {
    // Translation logic from h2b.js
    const translationsReverse = {
        '{{साँचा:Cite book': '{{টেমপ্লেট:বই উদ্ধৃতি',
        '{{साँचा:Cite web': '{{টেমপ্লেট:ওয়েব উদ্ধৃতি',
        '{{साँचा:Cite news': '{{টেমপ্লেট:সংবাদ উদ্ধৃতি',
        '{{साँचा:Cite journal': '{{টেমপ্লেট:জার্নাল উদ্ধৃতি',
        'तारीख': 'তারিখ',
        'पहुंच तिथि': 'সংগ্রহের তারিখ',
        'आर्काइव तिथि': 'আর্কাইভের তারিখ',
        'वेबसाइट': 'ওয়েবসাইট',
        'शीर्षक': 'শিরোনাম',
        'अंतिम': 'শেষাংশ',
        'प्रथम': 'প্রথমাংশ',
        'संपादक': 'সম্পাদক',
        'पृष्ठ': 'পাতা',
        'पृष्ठों': 'পাতাসমূহ',
        'लेखक': 'লেখক',
        'स्थान': 'অবস্থান',
        'आईएसबीएन': 'আইএসবিএন',
        'एलसीसीएन': 'এলসিসিএন',
        'भाषा': 'ভাষা',
        'उद्धरण': 'উক্তি',
        'स्थिति': 'অবস্থা',
        'सक्रिय': 'কার্যকর',
        '= मृत': '=অকার্যকর',
        'एजेंसी': 'এজেন্সি',
        'प्रकाशक': 'প্রকাশক',
        'अनुवादित': 'অনুবাদিত',
        'कार्य': 'কর্ম',
        'संस्करण': 'সংস্করণ',
        '१': '১',
        '२': '২',
        '३': '৩',
        '४': '৪',
        '५': '৫',
        '६': '৬',
        '७': '৭',
        '८': '৮',
        '९': '৯',
        '०': '০',
        'जनवरी': 'জানুয়ারি',
        'फरवरी': 'ফেব্রুয়ারি',
        'मार्च': 'মার্চ',
        'अप्रैल': 'এপ্রিল',
        'मई': 'মে',
        'जून': 'জুন',
        'जुलाई': 'জুলাই',
        'अगस्त': 'আগস্ট',
        'सितंबर': 'সেপ্টেম্বর',
        'अक्टूबर': 'অক্টোবর',
        'नवंबर': 'নভেম্বর',
        'दिसंबर': 'ডিসেম্বর',
        'यूआरएल': 'ইউআরএল'
    };

    for (const [hiTemplate, bnTemplate] of Object.entries(translationsReverse)) {
        const regex = new RegExp(hiTemplate, 'gi');
        inputText = inputText.replace(regex, bnTemplate);
    }

    return inputText;
}

function reverseTranslateTemplate(inputText) {
    // Translation logic from h2e.js
    const reverseTranslations = {
        '{{साँचा:Cite book': '{{cite book',
        '{{साँचा:Cite web': '{{cite web',
        '{{साँचा:Cite news': '{{cite news',
        '{{साँचा:Cite journal': '{{cite journal',
        'तारीख': 'date',
        'पहुंच तिथि': 'access-date',
        'आर्काइव तिथि': 'archive-date',
        'वेबसाइट': 'website',
        'शीर्षक': 'title',
        'अंतिम': 'last',
        'प्रथम': 'first',
        'संपादक': 'editor',
        'पृष्ठ': 'page',
        'पृष्ठों': 'pages',
        'लेखक': 'author',
        'स्थान': 'location',
        'आईएसबीएन': 'isbn',
        'एलसीसीएन': 'lccn',
        'भाषा': 'language',
        'उद्धरण': 'quote',
        'स्थिति': 'status',
        'सक्रिय': 'live',
        '= मृत': '=dead',
        'एजेंसी': 'agency',
        'प्रकाशक': 'publisher',
        'अनुवादित': 'trans',
        'कार्य': 'work',
        'संस्करण': 'volume',
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0',
        'जनवरी': 'January',
        'फरवरी': 'February',
        'मार्च': 'March',
        'अप्रैल': 'April',
        'मई': 'May',
        'जून': 'June',
        'जुलाई': 'July',
        'अगस्त': 'August',
        'सितंबर': 'September',
        'अक्टूबर': 'October',
        'नवंबर': 'November',
        'दिसंबर': 'December',
        'यूआरएल': 'url'
    };

    for (const [hiTemplate, enTemplate] of Object.entries(reverseTranslations)) {
        const regex = new RegExp(hiTemplate, 'gi');
        inputText = inputText.replace(regex, enTemplate);
    }

    return inputText;
}