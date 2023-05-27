let questionsArray = [];

questionsArray = [{

    question: "Select a Course to start the Quiz🙌",
    answer: "😁🐱‍🏍"

}];

const BIT4430 = [
    {
        question: "State and briefly define the 2 Privacy Laws",
        answer: "1. Opt Out Policy : Assume customers approve companies to store their personal data \n 2. Opt in Policy: Ask permission from customers"
    },
    {
        question: "State the 6 Candidate Ethical Principles",
        answer: "1. Golden Rule \n 2. Immanuel Kant's Categorical Imparative \n 3. Discartes' Rule of Change \n 4. Utitarian Principle \n 5. Risk Aversion Principle \n 6. Ethical 'no free launch' principle"
    },
    {
        question: "What is plagiarism?",
        answer: "Plagiarism is the act of stealing someone's ideas or words and passing them off as one's own."
    },
    {
        question: "What are plagiarism detection systems?",
        answer: "Plagiarism detection systems check submitted material against databases of electronic content to identify instances of plagiarism."
    },
    {
        question: "What is cybersquatting?",
        answer: "Cybersquatting refers to the act of registering domain names for famous trademarks or company names with the hope of selling them to the trademark owner for a large sum of money."
    },
    {
        question: "What is intellectual property?",
        answer: "Intellectual property is a term used to describe works of the mind that are distinct and 'owned' or created by a person or group. It includes copyrights, patents, trademarks, and trade secrets."
    },
    {
        question: "What is competitive intelligence?",
        answer: "Competitive intelligence is the gathering of legally obtainable information to help a company gain an advantage over rivals. It is often integrated into a company's strategic plans and decision making."
    },
    {
        question: "What is open source code?",
        answer: "Open source code refers to program source code that is made available for use or modification by users or other developers. It allows for collaboration and adaptation to meet new needs."
    },
    {
        question: "What is reverse engineering?",
        answer: "Reverse engineering is the process of taking something apart in order to understand it, build a copy of it, or improve it. In the context of computer software, it involves converting program code to a higher-level design or uncovering designs developed by others."
    },
    {
        question: "What is a trade secret?",
        answer: "A trade secret is business information that represents something of economic value, requires an effort or cost to develop, has some degree of uniqueness or novelty, and is generally unknown to the public. It is kept confidential and not publicly disclosed."
    },
    {
        question: "What is trademark infringement?",
        answer: "Trademark infringement occurs when someone uses the same or a confusingly similar trademark on a product's label without permission from the trademark owner. It often leads to legal disputes between organizations."
    },
    {
        question: "How can plagiarism be combated among students?",
        answer: "To combat plagiarism among students, it is important to educate them about what constitutes plagiarism and the need to cite sources. Other steps include showing students how to document web pages, scheduling major writing assignments in portions, and incorporating detection into an anti-plagiarism program."
    },
    {
        question: "What are the four key types of intellectual property protected by laws?",
        answer: "The four key types of intellectual property protected by laws are copyrights, patents, trademarks, and trade secrets."
    },
    {
        question: "What is the purpose of copyright law?",
        answer: "Copyright law protects authored works by granting creators the exclusive right to distribute, display, perform, reproduce, and prepare derivative works based upon the original work."
    },
    {
        question: "What is the purpose of patent law?",
        answer: "Patent law protects inventions by granting inventors the exclusive right to the invention for a limited time. It prevents others from making, using, or selling the patented invention without permission."
    },
    {
        question: "What is the difference between competitive intelligence and industrial espionage?",
        answer: "Competitive intelligence involves gathering legally obtainable information to gain a competitive advantage over rivals, while industrial espionage uses illegal means to obtain business information not available to the general public."
    },
    {
        question: "How is cybersquatting combated?",
        answer: "To protect against cybersquatting, it is recommended to register all possible domain names associated with trademarks or company names, including different top-level domains (.org, .com, .info). This helps prevent unauthorized registration by unaffiliated parties."
    },
    {
        question: "What is the purpose of noncompete agreements?",
        answer: "Noncompete agreements are designed to protect intellectual property from being used by competitors when key employees leave. They require employees not to work for competitors for a specific period of time."
    },
    {
        question: "What is the concept of fair use in copyright law?",
        answer: "Fair use doctrine allows for the use of portions of copyrighted materials without permission under certain circumstances. Factors such as the purpose of the use, nature of the work, portion used, and effect on the value of the work are considered."
    },
    {
        question: "What is the purpose of defensive publishing?",
        answer: "Defensive publishing is an alternative to filing for patents. It involves publishing a description of an innovation to establish its legal existence as prior art and can serve as a defense against patent infringement claims."
    },
    {
        question: "What is a submarine patent?",
        answer: "A submarine patent refers to a patented process or invention that is hidden within a standard and only surfaces when the standard is widely adopted. It can lead to legal issues and demands for royalties from parties using the standard."
    },
    {
        question: "How do trade secrets differ from patents and copyrights?",
        answer: "Trade secrets have no time limitations, do not require filing applications, and can protect valuable information indefinitely. Unlike patents and copyrights, trade secrets do not prevent others from independently developing or using the same idea."
    }
];

const BIT4420  = [
    {
      question: "What are three characteristics of the Cube Framework - EA³?",
      answer: "1. Holistic approach, considering enterprise as interrelated system of cubes.\n2. Scalability, adapting to organizations of various sizes and complexities.\n3. Modularity, encouraging decomposition of enterprise into manageable components."
    },
    {
      question: "What are three benefits of the Cube Framework - EA³?",
      answer: "1. Comprehensive analysis and design of enterprise architecture.\n2. Flexibility to customize according to organizational needs and goals.\n3. Integration between business and IT strategies."
    },
    {
      question: "What are three limitations of the Cube Framework - EA³?",
      answer: "1. Learning curve, requiring training and understanding for effective implementation.\n2. Complexity that may overwhelm small-scale organizations with limited resources.\n3. Lack of industry-wide adoption compared to other frameworks."
    },
    {
      question: "What are three characteristics of the Zachman Framework?",
      answer: "1. Matrix-based structure using a 6x6 grid for architectural perspectives.\n2. Universal applicability across diverse industries and organizational sizes.\n3. Classification of artifacts based on who, what, when, where, why, and how."
    },
    {
      question: "What are three benefits of the Zachman Framework?",
      answer: "1. Clarity in documenting and communicating architectural information.\n2. Consistency in understanding and interpretation across stakeholders.\n3. Reusability of architectural artifacts for efficient decision-making."
    },
    {
      question: "What are three limitations of the Zachman Framework?",
      answer: "1. Complexity that may require significant effort to fully grasp.\n2. Lack of detailed guidance, requiring additional methodologies for implementation.\n3. Time-consuming nature that may require significant documentation efforts."
    },
    {
      question: "What are three characteristics of The Open Group Architecture Framework - TOGAF?",
      answer: "1. Process-oriented approach with iterative development and continuous improvement.\n2. Comprehensive coverage of all aspects of enterprise architecture, including governance and technology.\n3. Modular division of architecture development into phases and domains."
    },
    {
      question: "What are three benefits of The Open Group Architecture Framework - TOGAF?",
      answer: "1. Standardization as a globally recognized enterprise architecture practice.\n2. Flexibility to adapt to different architectural styles and methodologies.\n3. Resourcefulness with a rich set of templates, resources, and guidelines."
    },
    {
      question: "What are three limitations of The Open Group Architecture Framework - TOGAF?",
      answer: "1. Complexity that requires substantial effort to understand and implement effectively.\n2. Heavy documentation requirements that may be time-consuming.\n3. Rigidity that may not suit organizations requiring agile and rapid decision-making."
    },
    {
      question: "What are three characteristics of the Federal Enterprise Architecture Framework - FEAF?",
      answer: "1. Government-focused design specifically for federal government agencies.\n2. Compliance-driven approach supporting adherence to laws, regulations, and standards.\n3. Hierarchical organization of architecture into segments, capabilities, and common solutions."
    },
    {
      question: "What are three benefits of the Federal Enterprise Architecture Framework - FEAF?",
      answer: "1. Alignment between agency missions, goals, and architecture.\n2. Interoperability and integration of systems across government agencies.\n3. Risk management through a structured approach for managing risks and investments."
    },
    {
      question: "What are three limitations of the Federal Enterprise Architecture Framework - FEAF?",
      answer: "1. Limited scope primarily applicable to government agencies, not general businesses.\n2. Bureaucratic nature involving complex governance structures and approval processes.\n3. Lack of industry-wide adoption outside the government sector."
    }
  ];
  

const BIT4411 = [
    {
        question: "BIT4411 No Questions Yet!",
        answer: "🐱‍🏍✌✨"
    }
];

const BIT4410 = [
    {
        question: "BIT4410 No Questions Yet!",
        answer: "🐱‍🏍✌✨"
    }
];

function changeCourse(courseCode) {
    console.log(courseCode);
    if (courseCode == 4410) {
        questionsArray = BIT4410;
        console.log(questionsArray);
    } else if (courseCode == 4411) {
        questionsArray = BIT4411;
        console.log(questionsArray)
    } else if (courseCode == 4420) {
        questionsArray = BIT4420;
        console.log(questionsArray)
    } else if (courseCode == 4430) {
        questionsArray = BIT4430;
        console.log(questionsArray)
    } else {
        questionsArray = [{

            question: "Select a Course to start the Quiz🙌",
            answer: "😁🐱‍🏍"

        }];
    }

    main();
}