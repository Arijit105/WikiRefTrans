function translateTemplateReverse() {
    const inputText = document.getElementById("inputText").value;

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

    let outputText = inputText;

    for (const [bnTemplate, enTemplate] of Object.entries(translationsReverse)) {
        const regex = new RegExp(bnTemplate, 'gi');
        outputText = outputText.replace(regex, enTemplate);
    }

    document.getElementById("outputText").value = outputText;
}