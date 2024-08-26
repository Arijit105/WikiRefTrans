function translateTemplate() {
    const inputText = document.getElementById("inputText").value;

    const translations = {
        '{{cite book': '{{সাময়িকী উদ্ধৃতি',
        '{{cite web': '{{ওয়েব উদ্ধৃতি',
        '{{cite news': '{{সংবাদ উদ্ধৃতি',
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
        'Spetember': 'সেপ্টেম্বর',
        'October': 'অক্টোবর',
        'November': 'নভেম্বর',
        'December': 'ডিসেম্বর',
        'url': 'ইউআরএল'
    };

    let outputText = inputText;

    for (const [enTemplate, bnTemplate] of Object.entries(translations)) {
        const regex = new RegExp(enTemplate, 'gi');
        outputText = outputText.replace(regex, bnTemplate);
    }

    document.getElementById("outputText").value = outputText;
}