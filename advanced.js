(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const langNames = { en: 'English', kn: 'ಕನ್ನಡ', ta: 'தமிழ்', te: 'తెలుగు', hi: 'हिन्दी', ml: 'മലയാളം' };
  const copy = {
    kn: {
      chooseLang:'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ', languageIntro:'ಸ್ಮಾರ್ಟ್‌ಫಾರ್ಮ್ ಅನ್ನು ನಿಮ್ಮ ಆಯ್ಕೆಯ ಭಾಷೆಯಲ್ಲಿ ಓದಿ. ನಂತರವೂ ಭಾಷೆ ಬದಲಾಯಿಸಬಹುದು.',
      changeLanguage:'ಭಾಷೆ ಬದಲಿಸಿ', modulesTitle:'ನೀರಾವರಿ ನಿಯಂತ್ರಿಸಿ. ಬೆಳೆಯನ್ನು ರಕ್ಷಿಸಿ.', modulesIntro:'ವಲಯವಾರು ನೀರಿನ ಹಂಚಿಕೆ, ಉಪಕರಣಗಳ ಪರಿಶೀಲನೆ, ಬೆಳೆ ರಕ್ಷಣೆ ಮತ್ತು ರೈತ ಸಹಾಯಕ.',
      precision:'ನಿಖರ ನೀರಾವರಿ', zone1:'ವಲಯ 01 · ಉತ್ತರದ ಹೊಲ', zone2:'ವಲಯ 02 · ತೋಟ', waterShare:'ನೀರಿನ ಹಂಚಿಕೆ', valve:'ವಾಲ್ವ್ ನಿಯಂತ್ರಣ',
      on:'ಆನ್ ಮಾಡಿ', off:'ಆಫ್ ಮಾಡಿ', distribution:'ನೀರಿನ ಹಂಚಿಕೆ ಗ್ರಾಫ್', shareHint:'ಒಟ್ಟು ಹಂಚಿಕೆ ಯಾವಾಗಲೂ 100%. ಒಂದು ವಲಯದ ಶೇಕಡಾವಾರು ಬದಲಿಸಿದರೆ ಮತ್ತೊಂದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.',
      equipment:'ಉಪಕರಣ ಮತ್ತು ಬೆಳೆ ರಕ್ಷಣೆ', camera:'ಕ್ಯಾಮೆರಾ ಪರಿಶೀಲನೆ (ಸಿಮ್ಯುಲೇಶನ್)', cameraRun:'ಪರಿಶೀಲನೆ ನಡೆಸಿ', noCamera:'ನೈಜ ಕ್ಯಾಮೆರಾ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ · ಮಾದರಿ ಫಲಿತಾಂಶಗಳು ಮಾತ್ರ',
      leak:'ನೀರಿನ ಕೊಳವೆ ಸೋರಿಕೆ', unitFault:'ನೀರಾವರಿ ಘಟಕದ ದೋಷ', animal:'ಪ್ರಾಣಿಗಳ ಚಟುವಟಿಕೆ', cropDamage:'ಬೆಳೆ ಹಾನಿ', motor:'ಮೋಟಾರ್ ವೇಗ', rpm:'RPM', motorStart:'ಮೋಟಾರ್ ಪ್ರಾರಂಭಿಸಿ', motorStop:'ಮೋಟಾರ್ ನಿಲ್ಲಿಸಿ',
      farmerAI:'ರೈತರ ಬುದ್ಧಿವಂತ ಸಹಾಯಕ', aiIntro:'ಬೆಳೆ, ಮಣ್ಣು, ಗೊಬ್ಬರ ಮತ್ತು ಖರೀದಿ ಮೂಲಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನಿಸಿ.', crop:'ಬೆಳೆ ಹೆಸರು', question:'ನಿಮ್ಮ ಪ್ರಶ್ನೆ', ask:'ಉತ್ತರ ಪಡೆಯಿರಿ', aiHint:'ಉದಾ: ರಾಗಿ ಬೆಳೆಗೆ ಯಾವ ಗೊಬ್ಬರ ಬೇಕು? ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಎಲ್ಲಿ ಮಾಡಿಸಬಹುದು?',
      fieldNotes:'ಹೊಲದ ಟಿಪ್ಪಣಿಗಳು', notesIntro:'ನಿಮ್ಮ ಹೊಲದ ಗಮನಿಕೆಗಳನ್ನು ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಸಿ.', notesPlaceholder:'ಇಂದಿನ ಹೊಲದ ಗಮನಿಕೆಗಳನ್ನು ಬರೆಯಿರಿ…', saveNotes:'ಟಿಪ್ಪಣಿ ಉಳಿಸಿ',
      schedule:'ಕಾರ್ಯಗಳು ಮತ್ತು ನೆನಪ提醒ಗಳು', scheduleIntro:'ಕೆಲಸ ಮತ್ತು ಸಮಯ ಸೇರಿಸಿ. ಪುಟ ತೆರೆದಿರುವಾಗ ಸೂಚನೆ ಸಿಗುತ್ತದೆ.', taskName:'ಮಾಡಬೇಕಾದ ಕೆಲಸ', dueTime:'ದಿನಾಂಕ ಮತ್ತು ಸಮಯ', addTask:'ನೆನಪ提醒 ಸೇರಿಸಿ',
      localSaved:'ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ.', demoOnly:'ಇದು ಸಿಮ್ಯುಲೇಶನ್ ಮಾತ್ರ. ನೈಜ ಸೆನ್ಸರ್, ಪಂಪ್ ಅಥವಾ ಕ್ಯಾಮೆರಾ ನಿಯಂತ್ರಣವಲ್ಲ.',
      leakFound:'ಕೊಳವೆ ಸೋರಿಕೆಯ ಮಾದರಿ ಎಚ್ಚರಿಕೆ', unitFound:'ನೀರಾವರಿ ಘಟಕದ ಮಾದರಿ ದೋಷ', animalFound:'ಪ್ರಾಣಿ ಚಲನೆಯ ಮಾದರಿ ಪತ್ತೆ', clearScan:'ಮಾದರಿ ಪರಿಶೀಲನೆಯಲ್ಲಿ ಸ್ಪಷ್ಟ ಸಮಸ್ಯೆ ಕಂಡುಬಂದಿಲ್ಲ.',
      aiOffline:'ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶಿ ಉತ್ತರ (Gemini ಸೇವೆ ಇನ್ನೂ ಜೋಡಿಸಲ್ಪಟ್ಟಿಲ್ಲ).'
    },
    ta: {
      chooseLang:'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்', languageIntro:'SmartFarm-ஐ உங்களுக்கு வசதியான மொழியில் படிக்கவும். பின்னர் மொழியை மாற்றலாம்.',
      changeLanguage:'மொழியை மாற்று', modulesTitle:'நீர்ப்பாசனத்தை கட்டுப்படுத்து. பயிரைக் காப்பாற்று.', modulesIntro:'மண்டல வாரியான நீர் ஒதுக்கீடு, உபகரணச் சோதனை, பயிர் பாதுகாப்பு மற்றும் விவசாயி உதவியாளர்.',
      precision:'துல்லிய நீர்ப்பாசனம்', zone1:'மண்டலம் 01 · வடக்கு வயல்', zone2:'மண்டலம் 02 · தோட்டம்', waterShare:'நீர் ஒதுக்கீடு', valve:'வால்வு கட்டுப்பாடு',
      on:'இயக்கு', off:'நிறுத்து', distribution:'நீர் பகிர்வு வரைபடம்', shareHint:'மொத்த ஒதுக்கீடு எப்போதும் 100%. ஒரு மண்டலத்தின் சதவீதத்தை மாற்றினால் மற்றொன்று தானாகச் சரிசெய்யப்படும்.',
      equipment:'உபகரண மற்றும் பயிர் பாதுகாப்பு', camera:'கேமரா ஆய்வு (உருவகப்படுத்தல்)', cameraRun:'ஆய்வை இயக்கு', noCamera:'நேரடி கேமரா இணைக்கப்படவில்லை · மாதிரி முடிவுகள் மட்டுமே',
      leak:'நீர் குழாய் கசிவு', unitFault:'நீர்ப்பாசன அலகு கோளாறு', animal:'விலங்கு செயல்பாடு', cropDamage:'பயிர் சேதம்', motor:'மோட்டார் வேகம்', rpm:'RPM', motorStart:'மோட்டாரைத் தொடங்கு', motorStop:'மோட்டாரை நிறுத்து',
      farmerAI:'விவசாயி அறிவு உதவியாளர்', aiIntro:'பயிர்கள், மண், உரம் மற்றும் வாங்கும் இடங்கள் பற்றி கேளுங்கள்.', crop:'பயிர் பெயர்', question:'உங்கள் கேள்வி', ask:'பதில் பெறுக', aiHint:'உதா: ராகி பயிருக்கு எந்த உரம்? மண் பரிசோதனை எங்கு செய்யலாம்?',
      fieldNotes:'வயல் குறிப்புகள்', notesIntro:'உங்கள் வயல் குறிப்புகளை இந்தச் சாதனத்தில் சேமிக்கவும்.', notesPlaceholder:'இன்றைய வயல் குறிப்புகளை எழுதுங்கள்…', saveNotes:'குறிப்பைச் சேமி',
      schedule:'பணிகள் மற்றும் நினைவூட்டல்கள்', scheduleIntro:'பணி மற்றும் நேரத்தைச் சேர்க்கவும். பக்கம் திறந்திருக்கும் போது அறிவிப்பு வரும்.', taskName:'செய்ய வேண்டிய பணி', dueTime:'தேதி மற்றும் நேரம்', addTask:'நினைவூட்டலைச் சேர்',
      localSaved:'இந்தச் சாதனத்தில் சேமிக்கப்பட்டது.', demoOnly:'இது உருவகப்படுத்தல் மட்டுமே. உண்மையான சென்சார், பம்ப் அல்லது கேமரா கட்டுப்பாடு அல்ல.',
      leakFound:'குழாய் கசிவு மாதிரி எச்சரிக்கை', unitFound:'நீர்ப்பாசன அலகு மாதிரி கோளாறு', animalFound:'விலங்கு இயக்கம் மாதிரியாக கண்டறியப்பட்டது', clearScan:'மாதிரி ஆய்வில் வெளிப்படையான சிக்கல் இல்லை.',
      aiOffline:'உள்ளூர் வழிகாட்டி பதில் (Gemini சேவை இன்னும் இணைக்கப்படவில்லை).'
    },
    te: {
      chooseLang:'మీ భాషను ఎంచుకోండి', languageIntro:'SmartFarm విషయాలను మీకు నచ్చిన భాషలో చదవండి. తర్వాత భాషను మార్చుకోవచ్చు.',
      changeLanguage:'భాష మార్చండి', modulesTitle:'నీటిపారుదల నియంత్రించండి. పంటను రక్షించండి.', modulesIntro:'జోన్ వారీగా నీటి పంపిణీ, పరికరాల తనిఖీ, పంట రక్షణ మరియు రైతు సహాయకుడు.',
      precision:'ఖచ్చితమైన నీటిపారుదల', zone1:'జోన్ 01 · ఉత్తర పొలం', zone2:'జోన్ 02 · తోట', waterShare:'నీటి కేటాయింపు', valve:'వాల్వ్ నియంత్రణ',
      on:'ఆన్ చేయండి', off:'ఆఫ్ చేయండి', distribution:'నీటి పంపిణీ గ్రాఫ్', shareHint:'మొత్తం కేటాయింపు ఎల్లప్పుడూ 100%. ఒక జోన్ శాతాన్ని మార్చితే మరొకటి ఆటోమేటిక్‌గా సర్దుబాటు అవుతుంది.',
      equipment:'పరికరాలు మరియు పంట రక్షణ', camera:'కెమెరా తనిఖీ (సిమ్యులేషన్)', cameraRun:'తనిఖీ ప్రారంభించండి', noCamera:'లైవ్ కెమెరా కనెక్ట్ కాలేదు · నమూనా ఫలితాలు మాత్రమే',
      leak:'నీటి పైపు లీకేజీ', unitFault:'నీటిపారుదల యూనిట్ లోపం', animal:'జంతువుల కదలిక', cropDamage:'పంట నష్టం', motor:'మోటార్ వేగం', rpm:'RPM', motorStart:'మోటార్ ప్రారంభించండి', motorStop:'మోటార్ ఆపండి',
      farmerAI:'రైతు తెలివైన సహాయకుడు', aiIntro:'పంటలు, నేల, ఎరువులు మరియు కొనుగోలు ప్రదేశాల గురించి అడగండి.', crop:'పంట పేరు', question:'మీ ప్రశ్న', ask:'సమాధానం పొందండి', aiHint:'ఉదా: రాగి పంటకు ఏ ఎరువు? నేల పరీక్ష ఎక్కడ చేయించాలి?',
      fieldNotes:'పొలం నోట్స్', notesIntro:'మీ పొలం పరిశీలనలను ఈ పరికరంలో సేవ్ చేయండి.', notesPlaceholder:'ఈరోజు పొలం నోట్స్ రాయండి…', saveNotes:'నోట్ సేవ్ చేయండి',
      schedule:'పనులు మరియు రిమైండర్లు', scheduleIntro:'పని మరియు సమయం జోడించండి. పేజీ తెరిచి ఉన్నప్పుడు నోటిఫికేషన్ వస్తుంది.', taskName:'చేయాల్సిన పని', dueTime:'తేదీ మరియు సమయం', addTask:'రిమైండర్ జోడించండి',
      localSaved:'ఈ పరికరంలో సేవ్ చేయబడింది.', demoOnly:'ఇది సిమ్యులేషన్ మాత్రమే. నిజమైన సెన్సార్, పంప్ లేదా కెమెరా నియంత్రణ కాదు.',
      leakFound:'పైపు లీక్ నమూనా హెచ్చరిక', unitFound:'నీటిపారుదల యూనిట్ నమూనా లోపం', animalFound:'జంతువుల కదలిక నమూనాగా గుర్తించబడింది', clearScan:'నమూనా తనిఖీలో స్పష్టమైన సమస్య కనిపించలేదు.',
      aiOffline:'స్థానిక మార్గదర్శక సమాధానం (Gemini సేవ ఇంకా కనెక్ట్ కాలేదు).'
    },
    hi: {
      chooseLang:'अपनी भाषा चुनें', languageIntro:'SmartFarm की जानकारी अपनी पसंदीदा भाषा में पढ़ें। आप बाद में भाषा बदल सकते हैं।',
      changeLanguage:'भाषा बदलें', modulesTitle:'सिंचाई नियंत्रित करें। फसल की रक्षा करें।', modulesIntro:'ज़ोन के अनुसार पानी का वितरण, उपकरण जाँच, फसल सुरक्षा और किसान सहायक।',
      precision:'सटीक सिंचाई', zone1:'ज़ोन 01 · उत्तरी खेत', zone2:'ज़ोन 02 · बाग', waterShare:'पानी का आवंटन', valve:'वाल्व नियंत्रण',
      on:'चालू करें', off:'बंद करें', distribution:'पानी वितरण ग्राफ', shareHint:'कुल आवंटन हमेशा 100% रहेगा। एक ज़ोन का प्रतिशत बदलने पर दूसरा अपने-आप समायोजित होगा।',
      equipment:'उपकरण और फसल सुरक्षा', camera:'कैमरा जाँच (सिमुलेशन)', cameraRun:'जाँच चलाएँ', noCamera:'कोई लाइव कैमरा जुड़ा नहीं है · केवल नमूना परिणाम',
      leak:'पानी की पाइप में रिसाव', unitFault:'सिंचाई इकाई में खराबी', animal:'जानवरों की गतिविधि', cropDamage:'फसल को नुकसान', motor:'मोटर की गति', rpm:'RPM', motorStart:'मोटर चालू करें', motorStop:'मोटर बंद करें',
      farmerAI:'किसान बुद्धिमत्ता सहायक', aiIntro:'फसल, मिट्टी, उर्वरक और खरीद के स्रोतों के बारे में पूछें।', crop:'फसल का नाम', question:'आपका सवाल', ask:'जवाब पाएँ', aiHint:'उदाहरण: रागी के लिए कौन-सा उर्वरक? मिट्टी की जाँच कहाँ कराएँ?',
      fieldNotes:'खेत के नोट्स', notesIntro:'खेत की टिप्पणियाँ इसी डिवाइस पर सहेजें।', notesPlaceholder:'आज के खेत के नोट्स लिखें…', saveNotes:'नोट सहेजें',
      schedule:'काम और रिमाइंडर', scheduleIntro:'काम और समय जोड़ें। पेज खुला रहने पर सूचना मिलेगी।', taskName:'क्या काम करना है', dueTime:'तारीख और समय', addTask:'रिमाइंडर जोड़ें',
      localSaved:'इस डिवाइस पर सहेजा गया।', demoOnly:'यह केवल सिमुलेशन है। असली सेंसर, पंप या कैमरा नियंत्रण नहीं।',
      leakFound:'पाइप रिसाव का नमूना अलर्ट', unitFound:'सिंचाई इकाई की नमूना खराबी', animalFound:'जानवर की गतिविधि का नमूना पता चला', clearScan:'नमूना जाँच में कोई स्पष्ट समस्या नहीं मिली।',
      aiOffline:'स्थानीय मार्गदर्शिका का जवाब (Gemini सेवा अभी कनेक्ट नहीं है)।'
    },
    ml: {
      chooseLang:'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക', languageIntro:'SmartFarm വിവരങ്ങൾ നിങ്ങൾക്ക് ഇഷ്ടമുള്ള ഭാഷയിൽ വായിക്കാം. പിന്നീട് ഭാഷ മാറ്റാം.',
      changeLanguage:'ഭാഷ മാറ്റുക', modulesTitle:'ജലസേചനം നിയന്ത്രിക്കുക. വിള സംരക്ഷിക്കുക.', modulesIntro:'മേഖല തിരിച്ചുള്ള ജലവിതരണം, ഉപകരണ പരിശോധന, വിള സംരക്ഷണം, കർഷക സഹായി.',
      precision:'കൃത്യമായ ജലസേചനം', zone1:'മേഖല 01 · വടക്കൻ പാടം', zone2:'മേഖല 02 · തോട്ടം', waterShare:'ജല വിഹിതം', valve:'വാൽവ് നിയന്ത്രണം',
      on:'ഓൺ ചെയ്യുക', off:'ഓഫ് ചെയ്യുക', distribution:'ജലവിതരണ ഗ്രാഫ്', shareHint:'മൊത്തം വിഹിതം എപ്പോഴും 100% ആയിരിക്കും. ഒരു മേഖലയിലെ ശതമാനം മാറ്റുമ്പോൾ മറ്റേത് സ്വയം ക്രമീകരിക്കും.',
      equipment:'ഉപകരണവും വിള സംരക്ഷണവും', camera:'ക്യാമറ പരിശോധന (സിമുലേഷൻ)', cameraRun:'പരിശോധന നടത്തുക', noCamera:'ലൈവ് ക്യാമറ ബന്ധിപ്പിച്ചിട്ടില്ല · മാതൃകാ ഫലങ്ങൾ മാത്രം',
      leak:'ജല പൈപ്പ് ചോർച്ച', unitFault:'ജലസേചന യൂണിറ്റ് തകരാർ', animal:'മൃഗങ്ങളുടെ പ്രവർത്തനം', cropDamage:'വിളനാശം', motor:'മോട്ടോർ വേഗം', rpm:'RPM', motorStart:'മോട്ടോർ ആരംഭിക്കുക', motorStop:'മോട്ടോർ നിർത്തുക',
      farmerAI:'കർഷക ബുദ്ധി സഹായി', aiIntro:'വിളകൾ, മണ്ണ്, വളം, വാങ്ങാനുള്ള ഇടങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക.', crop:'വിളയുടെ പേര്', question:'നിങ്ങളുടെ ചോദ്യം', ask:'ഉത്തരം നേടുക', aiHint:'ഉദാ: റാഗിക്ക് ഏത് വളം? മണ്ണ് പരിശോധന എവിടെ നടത്താം?',
      fieldNotes:'കൃഷിയിട കുറിപ്പുകൾ', notesIntro:'കൃഷിയിടത്തിലെ നിരീക്ഷണങ്ങൾ ഈ ഉപകരണത്തിൽ സൂക്ഷിക്കുക.', notesPlaceholder:'ഇന്നത്തെ കൃഷിയിട കുറിപ്പുകൾ എഴുതുക…', saveNotes:'കുറിപ്പ് സൂക്ഷിക്കുക',
      schedule:'ജോലികളും ഓർമ്മപ്പെടുത്തലുകളും', scheduleIntro:'ജോലിയും സമയവും ചേർക്കുക. പേജ് തുറന്നിരിക്കുമ്പോൾ അറിയിപ്പ് ലഭിക്കും.', taskName:'ചെയ്യേണ്ട ജോലി', dueTime:'തീയതിയും സമയവും', addTask:'ഓർമ്മപ്പെടുത്തൽ ചേർക്കുക',
      localSaved:'ഈ ഉപകരണത്തിൽ സൂക്ഷിച്ചു.', demoOnly:'ഇത് സിമുലേഷൻ മാത്രമാണ്. യഥാർത്ഥ സെൻസർ, പമ്പ്, ക്യാമറ നിയന്ത്രണമല്ല.',
      leakFound:'പൈപ്പ് ചോർച്ചയുടെ മാതൃകാ മുന്നറിയിപ്പ്', unitFound:'ജലസേചന യൂണിറ്റിന്റെ മാതൃകാ തകരാർ', animalFound:'മൃഗങ്ങളുടെ ചലനം മാതൃകയായി കണ്ടെത്തി', clearScan:'മാതൃകാ പരിശോധനയിൽ വ്യക്തമായ പ്രശ്നം കണ്ടില്ല.',
      aiOffline:'പ്രാദേശിക മാർഗ്ഗനിർദ്ദേശ മറുപടി (Gemini സേവനം ഇതുവരെ ബന്ധിപ്പിച്ചിട്ടില്ല).'
    }
  };
  let language = 'en';
  const t = (key) => (copy[language] && copy[language][key]) || ({
    chooseLang:'Choose your language', languageIntro:'Read SmartFarm in your preferred language. You can change this later.',
    changeLanguage:'Change language', modulesTitle:'Control irrigation. Protect the crop.', modulesIntro:'Zone-wise water allocation, equipment checks, crop protection and a farmer assistant.',
    precision:'Precision irrigation', zone1:'Zone 01 · North field', zone2:'Zone 02 · Orchard', waterShare:'Water allocation', valve:'Valve control',
    on:'Turn ON', off:'Turn OFF', distribution:'Water distribution graph', shareHint:'Total allocation always equals 100%. Changing one zone automatically adjusts the other.',
    equipment:'Equipment & crop protection', camera:'Camera inspection (simulation)', cameraRun:'Run inspection', noCamera:'No live camera connected · Sample results only',
    leak:'Water-pipe leakage', unitFault:'Irrigation unit fault', animal:'Animal activity', cropDamage:'Crop damage', motor:'Motor speed', rpm:'RPM',
    motorStart:'Start motor', motorStop:'Stop motor', farmerAI:'Farmer intelligence assistant',
    aiIntro:'Ask about crops, soil, fertilizers and where to source them.', crop:'Crop name', question:'Your question', ask:'Get advice',
    aiHint:'Example: Which fertilizer is suitable for ragi? Where can I test my soil?',
    fieldNotes:'Field notes', notesIntro:'Save field observations on this device.', notesPlaceholder:'Write today’s field notes…', saveNotes:'Save note',
    schedule:'Tasks & reminders', scheduleIntro:'Add a task and time. A notification can appear while this page stays open.',
    taskName:'Task to complete', dueTime:'Date and time', addTask:'Add reminder', localSaved:'Saved on this device.',
    demoOnly:'Simulation only. No real sensor, pump or camera is connected.'
  })[key] || key;
  
  const moduleMarkup = [
    '<section class="section advanced-section" id="farm-controls">',
    '<div class="container">',
    '<div class="section-head"><div><div class="kicker"><span>FARM CONTROL CENTRE</span><b>INTERACTIVE MODEL</b></div><h2 data-i18n="modulesTitle">Control irrigation. <em>Protect the crop.</em></h2></div><p data-i18n="modulesIntro">Zone-wise water allocation, equipment checks, crop protection and a farmer assistant.</p></div>',
    '<div class="advanced-grid">',
    '<article class="advanced-card irrigation-card"><div class="advanced-card-head"><div><span class="module-label">01 / WATER MANAGEMENT</span><h3 data-i18n="precision">Precision irrigation</h3><p>Independent valve switches and adjustable water shares</p></div><span class="status-pill sample-pill">DEMO MODEL</span></div>',
    '<div class="zone-control-grid">',
    '<div class="zone-control" data-zone-card="0"><div class="zone-control-top"><span class="zone-number">01</span><div><b data-i18n="zone1">Zone 01 · North field</b><small>Ragi · Sample soil moisture 42%</small></div><span class="zone-state" id="valveState0">OFF</span></div><div class="zone-control-actions"><button class="valve-button" data-valve="0" aria-pressed="false" data-i18n="on">Turn ON</button><span data-i18n="valve">Valve control</span></div><label class="range-label"><span data-i18n="waterShare">Water allocation</span><b id="shareValue0">65%</b></label><input class="share-slider" id="share0" type="range" min="0" max="100" value="65" aria-label="Zone 1 water allocation"></div>',
    '<div class="zone-control" data-zone-card="1"><div class="zone-control-top"><span class="zone-number zone-two">02</span><div><b data-i18n="zone2">Zone 02 · Orchard</b><small>Coconut · Sample soil moisture 31%</small></div><span class="zone-state" id="valveState1">OFF</span></div><div class="zone-control-actions"><button class="valve-button" data-valve="1" aria-pressed="false" data-i18n="on">Turn ON</button><span data-i18n="valve">Valve control</span></div><label class="range-label"><span data-i18n="waterShare">Water allocation</span><b id="shareValue1">35%</b></label><input class="share-slider" id="share1" type="range" min="0" max="100" value="35" aria-label="Zone 2 water allocation"></div>',
    '</div><div class="distribution-wrap"><div class="distribution-head"><b data-i18n="distribution">Water distribution graph</b><span id="activeZones">No zones active</span></div><div class="distribution-bars"><div class="distribution-row"><span>ZONE 01</span><div class="distribution-track"><i id="bar0" style="width:65%"></i></div><b id="barLabel0">65%</b></div><div class="distribution-row"><span>ZONE 02</span><div class="distribution-track"><i id="bar1" style="width:35%"></i></div><b id="barLabel1">35%</b></div></div><p class="hint" data-i18n="shareHint">Total allocation always equals 100%. Changing one zone automatically adjusts the other.</p><div class="simulation-flow"><span>SIMULATED TOTAL FLOW</span><strong id="totalFlow">0.0 <small>L/min</small></strong><span id="flowSplit">Both valves are OFF</span></div></div></article>',
    '<article class="advanced-card protection-card"><div class="advanced-card-head"><div><span class="module-label">02 / FIELD SAFETY</span><h3 data-i18n="equipment">Equipment &amp; crop protection</h3><p data-i18n="noCamera">No live camera connected · Sample results only</p></div><span class="camera-icon">◉</span></div>',
    '<div class="camera-scene"><div class="camera-scene-label"><i></i> FIELD CAMERA / SAMPLE VIEW</div><div class="camera-scene-cross">+</div><div class="camera-scene-caption">Crop rows · irrigation pipes · field edge</div></div>',
    '<button class="button button-dark scan-button" id="runInspection" data-i18n="cameraRun">Run inspection</button><div class="detection-grid">',
    '<div class="detection-item"><span>⌁</span><div><b data-i18n="leak">Water-pipe leakage</b><small id="leakStatus">Not checked</small></div></div>',
    '<div class="detection-item"><span>ϟ</span><div><b data-i18n="unitFault">Irrigation unit fault</b><small id="unitStatus">Not checked</small></div></div>',
    '<div class="detection-item"><span>♧</span><div><b data-i18n="animal">Animal activity</b><small id="animalStatus">Not checked</small></div></div>',
    '<div class="detection-item"><span>✳</span><div><b data-i18n="cropDamage">Crop damage</b><small id="cropStatus">Not checked</small></div></div>',
    '</div><div class="inspection-result" id="inspectionResult" aria-live="polite">Choose “Run inspection” to cycle through example detection cases.</div>',
    '<div class="motor-control"><div class="motor-head"><div><span class="module-label">MOTOR CONTROL / DEMO</span><b data-i18n="motor">Motor speed</b></div><strong id="rpmValue">1,200 <small data-i18n="rpm">RPM</small></strong></div><input id="motorSpeed" type="range" min="0" max="3000" step="100" value="1200" aria-label="Simulated motor speed"><div class="motor-actions"><button id="motorToggle" class="motor-button" aria-pressed="false" data-i18n="motorStart">Start motor</button><span id="motorState">Motor OFF · Simulation only</span></div></div>',
    '<p class="hint" data-i18n="demoOnly">Simulation only. No real sensor, pump or camera is connected.</p></article>',
    '</div>',
    '<div class="advanced-grid second-advanced-grid">',
    '<article class="advanced-card ai-card"><div class="advanced-card-head"><div><span class="module-label">03 / FARMER SUPPORT</span><h3 data-i18n="farmerAI">Farmer intelligence assistant</h3><p data-i18n="aiIntro">Ask about crops, soil, fertilizers and where to source them.</p></div><span class="ai-spark">✳</span></div>',
    '<form id="farmerForm" class="farmer-form"><label><span data-i18n="crop">Crop name</span><input id="cropName" maxlength="60" placeholder="e.g. Ragi, tomato, coconut"></label><label><span data-i18n="question">Your question</span><textarea id="farmerQuestion" rows="3" maxlength="1200" placeholder="Which fertilizer is suitable? Where can I get it?"></textarea></label><button class="button button-dark" type="submit" data-i18n="ask">Get advice</button></form><p class="hint" data-i18n="aiHint">Example: Which fertilizer is suitable for ragi? Where can I test my soil?</p><div class="ai-response" id="aiResponse" aria-live="polite">Ask a question to receive crop guidance. The local guide works in demo mode.</div><div class="ai-footnote">MODEL: GEMINI 3.8 FLASH · SEARCH-ENABLED WHEN SECURE SERVICE IS DEPLOYED</div></article>',
    '<article class="advanced-card notes-card"><div class="advanced-card-head"><div><span class="module-label">04 / FARM JOURNAL</span><h3 data-i18n="fieldNotes">Field notes</h3><p data-i18n="notesIntro">Save field observations on this device.</p></div><span class="notes-icon">✎</span></div><textarea id="fieldNotesText" class="notes-textarea" rows="6" maxlength="4000" data-i18n-placeholder="notesPlaceholder" placeholder="Write today’s field notes…"></textarea><div class="notes-actions"><span id="notesSaved" data-i18n="localSaved">Saved on this device.</span><button id="saveFieldNotes" class="button button-dark" data-i18n="saveNotes">Save note</button></div><p class="hint">Notes stay in this browser only. Clearing browser data removes them.</p></article>',
    '</div>',
    '<article class="advanced-card reminder-card"><div class="advanced-card-head"><div><span class="module-label">05 / DAILY FARM ROUTINE</span><h3 data-i18n="schedule">Tasks &amp; reminders</h3><p data-i18n="scheduleIntro">Add a task and time. A notification can appear while this page stays open.</p></div><span class="reminder-icon">◷</span></div>',
    '<form id="reminderForm" class="reminder-form"><label><span data-i18n="taskName">Task to complete</span><input id="reminderName" maxlength="100" required placeholder="e.g. Check drip line"></label><label><span data-i18n="dueTime">Date and time</span><input id="reminderTime" type="datetime-local" required></label><button class="button button-dark" type="submit" data-i18n="addTask">Add reminder</button></form><div class="reminder-list" id="reminderList"></div><p class="hint">Browser reminders work only while this page is open. They are stored on this device; a closed tab or device cannot deliver an alert.</p></article>',
    '<p class="advanced-disclaimer" data-i18n="demoOnly">Simulation only. No real sensor, pump or camera is connected.</p>',
    '</div></section>'
  ].join('');

  function addLanguageOverlay() {
    if ($('#languageGate')) return;
    document.body.insertAdjacentHTML('beforeend',
      '<div class="language-gate" id="languageGate" role="dialog" aria-modal="true" aria-labelledby="languageGateTitle"><div class="language-box"><span class="brand-icon">✳</span><small>SMARTFARM · WELCOME</small><h2 id="languageGateTitle">Choose your language</h2><p id="languageIntro">Read SmartFarm in your preferred language. You can change this later.</p><div class="language-options">' +
      Object.keys(langNames).map((code) => '<button type="button" class="language-choice" data-language="' + code + '">' + langNames[code] + '<span>→</span></button>').join('') +
      '</div><span class="language-foot">ಕನ್ನಡ · தமிழ் · తెలుగు · हिन्दी · മലയാളം</span></div></div>');
  }

  function applyLanguage(code) {
    language = copy[code] ? code : 'en';
    document.documentElement.lang = ({kn:'kn',ta:'ta',te:'te',hi:'hi',ml:'ml'}[language] || 'en');
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const gateTitle = $('#languageGateTitle'); const intro = $('#languageIntro');
    if (gateTitle) gateTitle.textContent = t('chooseLang');
    if (intro) intro.textContent = t('languageIntro');
    // Localise the main navigation and the most-used dashboard labels.
    const nav = $('.nav');
    const navText = ({
      en:['Platform','Features','How it works','The project','Explore dashboard'],
      kn:['ವೇದಿಕೆ','ವೈಶಿಷ್ಟ್ಯಗಳು','ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ','ಯೋಜನೆ','ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ'],
      ta:['தளம்','அம்சங்கள்','எப்படி செயல்படுகிறது','திட்டம்','டாஷ்போர்டைத் திற'],
      te:['ప్లాట్‌ఫారమ్','ఫీచర్లు','ఇది ఎలా పనిచేస్తుంది','ప్రాజెక్ట్','డాష్‌బోర్డ్ చూడండి'],
      hi:['प्लेटफ़ॉर्म','विशेषताएँ','कैसे काम करता है','परियोजना','डैష్‌బోర్డ్ देखें'],
      ml:['പ്ലാറ്റ്ഫോം','സവിശേഷതകൾ','എങ്ങനെ പ്രവർത്തിക്കുന്നു','പ്രോജക്റ്റ്','ഡാഷ്ബോർഡ് തുറക്കുക']
    })[language];
    if (nav && navText) {
      $('.nav a').forEach((a, i) => { if (navText[i]) a.textContent = navText[i]; });
      $('.mobile-nav a').forEach((a, i) => { if (navText[i]) a.textContent = navText[i]; });
      const mobileLast = $('.mobile-nav a:last-child');
      if (mobileLast) mobileLast.textContent = navText[4] + ' ↗';
    }
    const title = $('.hero h1');
    if (title) {
      const heroText = {
        kn:'ಹೆಚ್ಚು ಬೆಳೆಸಿ.<br><em>ಕಡಿಮೆ ವ್ಯರ್ಥಮಾಡಿ.</em><br>ಎಲ್ಲವನ್ನೂ ತಿಳಿಯಿರಿ.',
        ta:'அதிகம் விளைவிக்கவும்.<br><em>வீணாக்கத்தைக் குறைக்கவும்.</em><br>அனைத்தையும் அறியவும்.',
        te:'మరింత పండించండి.<br><em>వృథాను తగ్గించండి.</em><br>అన్నీ తెలుసుకోండి.',
        hi:'ज़्यादा उगाएँ।<br><em>कम बर्बाद करें।</em><br>सब जानें।',
        ml:'കൂടുതൽ വിളയിക്കൂ.<br><em>പാഴാക്കൽ കുറയ്ക്കൂ.</em><br>എല്ലാം അറിയൂ.'
      };
      title.innerHTML = language === 'en'
        ? 'Grow more.<br><em>Waste less.</em><br>Know everything.'
        : heroText[language];
    }
    const change = $('#changeLanguage');
    if (change) change.textContent = (language === 'en' ? 'Language: English' :
      'Language: ' + langNames[language]);
  }

  function addLanguageButton() {
    const header = $('.header');
    if (!header || $('#changeLanguage')) return;
    const button = document.createElement('button');
    button.id = 'changeLanguage'; button.className = 'language-change';
    button.textContent = 'Language: English';
    button.type = 'button';
    button.setAttribute('aria-label', 'Change website language');
    button.addEventListener('click', () => { $('#languageGate').classList.add('visible'); });
    header.append(button);
  }

  function initIrrigation() {
    const shares = [65, 35], valves = [false, false];
    const valveButtons = $$('[data-valve]');
    function render() {
      for (let i = 0; i < 2; i++) {
        $('#share' + i).value = String(shares[i]);
        $('#shareValue' + i).textContent = shares[i] + '%';
        $('#bar' + i).style.width = shares[i] + '%';
        $('#barLabel' + i).textContent = shares[i] + '%';
        $('#valveState' + i).textContent = valves[i] ? 'ON' : 'OFF';
        valveButtons[i].setAttribute('aria-pressed', String(valves[i]));
        valveButtons[i].textContent = valves[i] ? t('off') : t('on');
        $('[data-zone-card="' + i + '"]').classList.toggle('valve-active', valves[i]);
      }
      const active = valves.map((on, i) => on ? (i + 1) : null).filter(Boolean);
      const flow = valves.reduce((sum, on, i) => sum + (on ? 18 * shares[i] / 100 : 0), 0);
      $('#totalFlow').innerHTML = flow.toFixed(1) + ' <small>L/min</small>';
      $('#activeZones').textContent = active.length ? 'Active: Zone ' + active.join(' + ') : 'No zones active';
      $('#flowSplit').textContent = flow > 0 ? 'Sample flow is split by each active zone allocation.' : 'Both valves are OFF';
    }
    $('#share0').addEventListener('input', (event) => { shares[0] = Number(event.target.value); shares[1] = 100 - shares[0]; render(); });
    $('#share1').addEventListener('input', (event) => { shares[1] = Number(event.target.value); shares[0] = 100 - shares[1]; render(); });
    valveButtons.forEach((button) => button.addEventListener('click', () => {
      const i = Number(button.dataset.valve); valves[i] = !valves[i]; render();
      showToast('Zone ' + (i + 1) + ' valve ' + (valves[i] ? 'ON' : 'OFF') + ' · simulation only');
    }));
    render();
  }

  function initProtection() {
    const scenarios = [
      { leak:'Possible leak · sample', unit:'Normal · sample', animal:'No activity · sample', crop:'No visible damage · sample', result:'leakFound', tone:'warning' },
      { leak:'Normal · sample', unit:'Flow mismatch · sample', animal:'No activity · sample', crop:'No visible damage · sample', result:'unitFound', tone:'warning' },
      { leak:'Normal · sample', unit:'Normal · sample', animal:'Animal movement · sample', crop:'Possible plant damage · sample', result:'animalFound', tone:'warning' },
      { leak:'No issue · sample', unit:'No issue · sample', animal:'No activity · sample', crop:'No damage · sample', result:'clearScan', tone:'good' }
    ];
    let cycle = -1, motorOn = false;
    $('#runInspection').addEventListener('click', () => {
      cycle = (cycle + 1) % scenarios.length;
      const item = scenarios[cycle];
      $('#leakStatus').textContent = item.leak; $('#unitStatus').textContent = item.unit;
      $('#animalStatus').textContent = item.animal; $('#cropStatus').textContent = item.crop;
      const result = $('#inspectionResult');
      result.textContent = t(item.result);
      result.className = 'inspection-result ' + item.tone;
    });
    const speed = $('#motorSpeed');
    function renderMotor() {
      const value = Number(speed.value);
      $('#rpmValue').innerHTML = value.toLocaleString() + ' <small>RPM</small>';
      $('#motorToggle').textContent = motorOn ? t('motorStop') : t('motorStart');
      $('#motorToggle').setAttribute('aria-pressed', String(motorOn));
      $('#motorState').textContent = motorOn ? 'Motor ON · ' + value + ' RPM · Simulated' : 'Motor OFF · Simulation only';
    }
    speed.addEventListener('input', renderMotor);
    $('#motorToggle').addEventListener('click', () => { motorOn = !motorOn; renderMotor(); showToast(motorOn ? 'Simulated motor started.' : 'Simulated motor stopped. No real motor was controlled.'); });
    renderMotor();
  }

  function offlineAdvice(crop, question) {
    const c = (crop || '').toLowerCase();
    let cropTip = 'For ' + (crop || 'your crop') + ', begin with a soil test and confirm the crop stage, soil type and irrigation method before selecting fertilizer.';
    if (c.includes('ragi') || c.includes('finger millet')) cropTip = 'For ragi (finger millet), use a soil-test-based nutrient plan. Farmyard manure or compost can support soil organic matter; nitrogen and phosphorus needs depend on variety, rainfall and soil test.';
    else if (c.includes('tomato')) cropTip = 'For tomato, base N-P-K and calcium/micronutrient decisions on a soil test and crop stage. Avoid excess nitrogen, which can encourage leafy growth at the expense of fruiting.';
    else if (c.includes('coconut')) cropTip = 'For coconut, nutrient planning depends on palm age, soil and rainfall. Use well-decomposed organic matter and a locally recommended split nutrient schedule based on a soil test.';
    else if (c.includes('paddy') || c.includes('rice')) cropTip = 'For paddy, fertilizer timing depends on variety, soil type, water regime and growth stage. A soil-test-based split application is preferable to a fixed generic dose.';
    else if (c.includes('groundnut')) cropTip = 'For groundnut, test soil pH and nutrients; calcium and sulphur may matter in some soils, but apply amendments only when local recommendations and soil tests support them.';
    return cropTip + '\n\nWhere to source inputs in India: check a licensed fertiliser/seed dealer, a farmer cooperative or FPO, your district agriculture department, or the nearest Krishi Vigyan Kendra (KVK) for locally approved products. Ask for a sealed pack, bill, batch number and label; compare the label with your soil-test recommendation.\n\nI cannot verify live shop stock or prices in this demo. Your question: ' + (question || 'Please share your soil test and crop stage for more specific guidance.') + '\n\nImportant: This is general information, not a fertilizer dose. Get a local soil-test-based recommendation before applying nutrients.';
  }

  function initFarmerAI() {
    const form = $('#farmerForm'), output = $('#aiResponse');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const crop = $('#cropName').value.trim();
      const question = $('#farmerQuestion').value.trim();
      if (!question) { $('#farmerQuestion').focus(); return; }
      const prompt = 'You are a careful agricultural information assistant for farmers in India. Answer in ' +
        (langNames[language] || 'English') + '. Crop: ' + (crop || 'not specified') + '. Farmer question: ' + question +
        '. Give practical, concise guidance. Ask for soil test, district, crop variety and growth stage when needed. Never invent exact shop names, current stock, prices, or government schemes. When asked where to buy, explain reliable source types (licensed input dealers, cooperatives/FPOs, agriculture department, KVK) and say how to verify packaging and bills. Do not prescribe a fertilizer dose without adequate soil and crop context. Clearly distinguish general guidance from verified current information.';
      output.textContent = 'Checking crop guidance…';
      try {
        const response = await fetch('/api/gemini', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, language: language })
        });
        if (!response.ok) throw new Error('AI endpoint unavailable');
        const data = await response.json();
        if (!data.answer) throw new Error('Empty response');
        output.textContent = data.answer + (data.sources && data.sources.length ? '\n\nSources:\n' + data.sources.map((s) => s.title + ' — ' + s.url).join('\n') : '');
      } catch (_) {
        output.textContent = t('aiOffline') + '\n\n' + offlineAdvice(crop, question);
      }
    });
  }

  function initNotes() {
    const key = 'smartfarm.fieldNotes.v1';
    const text = $('#fieldNotesText');
    try { text.value = localStorage.getItem(key) || ''; } catch (_) { /* storage may be blocked */ }
    $('#saveFieldNotes').addEventListener('click', () => {
      try { localStorage.setItem(key, text.value); $('#notesSaved').textContent = t('localSaved') + ' ' + new Date().toLocaleString(); }
      catch (_) { $('#notesSaved').textContent = 'Browser storage is unavailable.'; }
    });
  }

  function initReminders() {
    const key = 'smartfarm.reminders.v1';
    let tasks = [];
    try { tasks = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) { tasks = []; }
    const list = $('#reminderList');
    function save() { try { localStorage.setItem(key, JSON.stringify(tasks)); } catch (_) { showToast('Could not save reminders in this browser.'); } }
    function alertTask(task) {
      if (task.done || task.alerted) return;
      task.alerted = true; save();
      const message = 'Farm reminder: ' + task.name;
      showToast(message);
      if ('Notification' in window && Notification.permission === 'granted') new Notification('SmartFarm reminder', { body: task.name });
    }
    function schedule(task) {
      if (task.done || task.alerted || !task.due) return;
      const delay = new Date(task.due).getTime() - Date.now();
      if (delay <= 0) { alertTask(task); return; }
      window.setTimeout(() => {
        if (Date.now() >= new Date(task.due).getTime()) alertTask(task);
        else schedule(task);
      }, Math.min(delay, 2147000000));
    }
    function render() {
      list.replaceChildren();
      if (!tasks.length) { const empty = document.createElement('p'); empty.className = 'empty-reminders'; empty.textContent = 'No reminders added yet.'; list.append(empty); return; }
      tasks.sort((a, b) => new Date(a.due) - new Date(b.due));
      tasks.forEach((task) => {
        const row = document.createElement('div'); row.className = 'reminder-item' + (task.done ? ' completed' : '');
        const check = document.createElement('input'); check.type = 'checkbox'; check.checked = !!task.done; check.setAttribute('aria-label', 'Mark ' + task.name + ' complete');
        const details = document.createElement('span'); const name = document.createElement('b'); name.textContent = task.name;
        const time = document.createElement('small'); time.textContent = new Date(task.due).toLocaleString(); details.append(name, time);
        const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', 'Delete reminder');
        check.addEventListener('change', () => { task.done = check.checked; save(); render(); });
        remove.addEventListener('click', () => { tasks = tasks.filter((item) => item.id !== task.id); save(); render(); });
        row.append(check, details, remove); list.append(row);
      });
    }
    $('#reminderForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = $('#reminderName').value.trim(), due = $('#reminderTime').value;
      if (!name || !due) return;
      if (new Date(due).getTime() <= Date.now()) { showToast('Choose a future date and time.'); return; }
      if ('Notification' in window && Notification.permission === 'default') {
        try { await Notification.requestPermission(); } catch (_) { /* on-page reminder still works */ }
      }
      const task = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), name, due, done: false, alerted: false };
      tasks.push(task); save(); render(); schedule(task); $('#reminderName').value = '';
      showToast('Reminder saved on this device. Keep this page open for the alert.');
    });
    render(); tasks.forEach(schedule);
  }

  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    const text = $('#toastMessage');
    if (text) text.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(window.__smartFarmToastTimer);
    window.__smartFarmToastTimer = window.setTimeout(() => toast.classList.remove('show'), 4200);
  }

  function removeOldArchitecture() {
    const project = $('.project-section');
    if (!project) return;
    const arch = $('.architecture', project); if (arch) arch.remove();
    const stack = $('.stack-grid', project); if (stack) stack.remove();
    const heading = $('.section-head h2', project);
    if (heading) heading.innerHTML = 'One focused website.<br><em>A practical farming model.</em>';
    const para = $('.section-head > p', project);
    if (para) para.textContent = 'A website-first engineering prototype with interactive irrigation zones, simulated field protection, crop guidance, field notes and reminders. Live devices, camera feeds and motor switching are outside this demo.';
    const roadmap = $('.roadmap-grid', project);
    if (roadmap) roadmap.innerHTML =
      '<article><small>MODULE 01</small><b>01</b><h4>Precision irrigation</h4><p>Zone 01 and Zone 02 allocation, valve and flow simulation.</p><label>WATER MANAGEMENT</label></article>' +
      '<article><small>MODULE 02</small><b>02</b><h4>Field protection</h4><p>Sample leak, unit-fault and animal/crop detection scenarios.</p><label>DEMO INSPECTION</label></article>' +
      '<article><small>MODULE 03</small><b>03</b><h4>Farmer intelligence</h4><p>Gemini-ready crop and fertilizer assistant with local fallback.</p><label>DECISION SUPPORT</label></article>' +
      '<article><small>MODULE 04</small><b>04</b><h4>Farm routines</h4><p>Local field notes, task planning and in-page reminders.</p><label>DAILY PLANNING</label></article>';
  }

  function boot() {
    const dashboard = $('#dashboard');
    if (!dashboard) return;
    dashboard.insertAdjacentHTML('afterend', moduleMarkup);
    addLanguageOverlay();
    addLanguageButton();
    const stored = (() => { try { return localStorage.getItem('smartfarm.language.v1'); } catch (_) { return null; } })();
    applyLanguage(stored && copy[stored] ? stored : 'en');
    // Always show the language chooser on entry; the saved language is pre-applied until a new choice is made.
    $('#languageGate').classList.add('visible');
    $('.language-choice').forEach((button) => button.addEventListener('click', () => {
      const code = button.dataset.language;
      // GTranslate handles the complete page; the local dictionary keeps dynamic dashboard controls translated too.
      const widgetSelect = $('#gtranslate_widget select');
      if (widgetSelect) {
        const option = Array.from(widgetSelect.options).find((item) => item.value.split('|').pop() === code);
        if (option) {
          widgetSelect.value = option.value;
          widgetSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
      if (typeof window.doGTranslate === 'function') window.doGTranslate('en|' + code);
      applyLanguage(code);
      try { localStorage.setItem('smartfarm.language.v1', code); } catch (_) { /* selection still works for this visit */ }
      $('#languageGate').classList.remove('visible');
    }));
    initIrrigation(); initProtection(); initFarmerAI(); initNotes(); initReminders();
    removeOldArchitecture();
    const modulesLink = document.createElement('a');
    modulesLink.href = '#farm-controls'; modulesLink.textContent = 'Farm controls'; modulesLink.className = 'advanced-nav-link';
    const nav = $('.nav'); if (nav) nav.insertBefore(modulesLink, nav.lastElementChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();