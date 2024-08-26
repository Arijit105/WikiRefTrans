function reverseTranslateTemplate() {
    const inputText = document.getElementById("inputText").value;

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

    let outputText = inputText;

    for (const [hiTemplate, enTemplate] of Object.entries(reverseTranslations)) {
        const regex = new RegExp(hiTemplate, 'gi');
        outputText = outputText.replace(regex, enTemplate);
    }

    document.getElementById("outputText").value = outputText;
}