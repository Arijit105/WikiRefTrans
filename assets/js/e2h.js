function translateToHindiTemplate() {
    const inputText = document.getElementById("inputText").value;

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

    let outputText = inputText;

    for (const [enTemplate, hiTemplate] of Object.entries(translations)) {
        const regex = new RegExp(enTemplate, 'gi');
        outputText = outputText.replace(regex, hiTemplate);
    }

    document.getElementById("outputText").value = outputText;
}