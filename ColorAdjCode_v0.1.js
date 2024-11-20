{
"frames": {
        "exit-survey": {
            "kind": "exp-lookit-exit-survey",
            "debriefing": {
                "text": "Here is where you would enter debriefing information for the family. This is a chance to explain the purpose of your study and how the family helped; at this point it's more obvious to the participant that skimming the info is fine if they're not super-interested, so you can elaborate in ways you might have avoided ahead of time in the interest of keeping instructions short. You may want to mention the various conditions kids were assigned to if you didn't before, and try to head off any concerns parents might have about how their child 'did' on the study, especially if there are 'correct' answers that will have been obvious to a parent. <br><br> It is great if you can link people to a layperson-accessible article on a related topic - e.g., media coverage of one of your previous studies in this research program, a talk on Youtube, a parenting resource. <br><br> If you are compensating participants, restate what the compensation is (and any conditions, and let them know when to expect their payment! E.g.: To thank you for your participation, we'll be emailing you a $4 Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study. (If you don't hear from us by then, feel free to reach out!) If you participate again with another child in the age range, you'll receive one gift card per child.",
                "title": "Thank you!"
            },
"frames": {
    "video-config": {
        "kind": "exp-video-config",
        "troubleshootingIntro": ""
    }
        
},
        "video-consent": {
            "kind": "exp-lookit-video-consent",
            "template": "consent_002",
            "PIName": "Spencer Tepper",
            "institution": "University of Massachusetts Amherst",
            "PIContact": "Deborah Foucault at dfoucaulteth@umass.edu",
            "purpose": "The purpose of this study is to see how your child answers questions about recursive color adjectives.",
            "procedures": "For this study, your child will read or listen to a short story (2 sentences) and answer questions. For each story, there will be ",
            "risk_statement": "We do not expect any risks to participating in this study.",
            "payment": "There will be no compensation for completing this study",
            "datause": "We are primarily interested in your child’s responses. A research assistant collect your child's responses to the questions.",
            "include_databrary": true,
            "gdpr": false,
            "research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the University of Massachusetts International Research Board"
            "styles": {
                    "container": {
                        "marginTop": "50px"
                }
            }
        },
        "intro": {
            "blocks": [
                {
                    "emph": true,
                    "text": "Your child does not need to be with you until the questions begin. First, let's go over what will happen!",
                    "title": "Overview of the 'Color Adjectives L1' study"
                },
                {
                    "text": "During this study, your child will be listening/reading short stories and need to answer a question."
                },
                {
                    "text": "You’ll have a chance to preview the stories and questions ahead of time. After reading the instructions you’ll start the experiment when you and your child are ready."
                },
                {
                    "text": "The question section will take about 10 minutes."
                },
                {
                    "text": "After the questions, you will answer a final survey. Then you're all done!"
                }
            ],
            "showPreviousButton": false,
            "kind": "exp-lookit-text"
        },
        "parent-preview": {
            "kind": "exp-lookit-stimuli-preview",
            "doRecording": true,
            "skipButtonText": "Skip preview",
            "requirePreview": false,
            "previewButtonText": "I'd like to preview the questions",
            "blocks": [
                {
                    "text": "During the question, we'll ask you not to answer any questions, however you can replay the audio if your child requests it."
                },
                {
                    "text": "If you'd like to see the quetsions your child will be shown, you can take a look ahead of time now. It's important that you preview the questions without your child, so that the questions will still be new to them."
                }
            ],
            "showPreviousButton": true,
            "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
            "videoTypes": [
                "webm",
                "mp4"
            ],
            "audioTypes": [
                "mp3",
                "ogg"
            ],
            "stimuli": [
                {
                    "caption": "At the start of each section, we show a short story and play an audio reading the question out loud",
                    "audio": "sample_1"
                },
                {
                    "caption": "Your child will be look a image with two people and a group of objects. We'll ask him or her choose which person has the object being asked for by the question.",
                    "image": "sample.png"
                }
            ]
        },
        "warmup-questions": {
            "kind": "exp-lookit-images-audio",
            "audio": "warmup1audio",
            "images": [
                {
                    "id": "option1",
                    "src": "warmup(1o1).png",
                    "top": "0",
                    "displayDelayMS": 2000
                },
                {
                    "id": "option2",
                    "src": "warmup(1o2).png",
                    "top": "63",
                    "displayDelayMs": 6000
                }
            ],
            "highlights": [
                {
                    "range": [
                        2,
                        5
                    ],
                    "imageId": "option1"
                },
                {
                    "range": [
                        6,
                        10
                    ],
                    "imageId": "option2"
                }
            ],
            "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
            "autoProceed": false,
            "doRecording": true,
            "choiceRequired": true,
            "parentTextBlock": {
                "text": "If your child doesn't understand or wants to hear the audio again, press replay audio.",
                "title": "For parents"
            },
            "canMakeChoiceBeforeAudioFinished": true,
            "allowUserPause": false
        },
        "test-questions": {
            "kind": "exp-lookit-images-audio",
            "audio": "question1audio",
            "images": [
                {
                    "id": "option1",
                    "src": "question(1o1).png",
                    "top": "0",
                    "displayDelayMS": 2000
                },
                {
                    "id": "option2",
                    "src": "question(1o2).png",
                    "top": "63",
                    "displayDelayMs": 6000
                }
            ],
            "highlights": [
                {
                    "range": [
                        2,
                        5
                    ],
                    "imageId": "option1"
                },
                {
                    "range": [
                        6,
                        10
                    ],
                    "imageId": "option2"
                }
            ],
            "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
            "autoProceed": false,
            "doRecording": true,
            "choiceRequired": true,
            "parentTextBlock": {
                "text": "If your child doesn't understand or wants to hear the audio again, press replay audio.",
                "title": "For parents"
            },
            "canMakeChoiceBeforeAudioFinished": true,
            "allowUserPause": false
        }
    },
    "question1": {
            "kind": "exp-lookit-images-audio",
            "audio": "question1audio",
            "audioTypes": [
                "mp3"
            ],
            "images": [
                {
                    "id": "question1",
                    "src": "question1.png",
                    "position": "fill"
                }
            ],
            "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
            "autoProceed": false,
            "doRecording": true,
            "choiceRequired": true
            "canMakeChoiceBeforeAudioFinished": true,
            "allowUserPause": false
        },
    "question2": {
            "kind": "exp-lookit-images-audio",
            "audio": "question2audio",
            "audioTypes": [
                "mp3"
            ],
            "images": [
                {
                    "id": "question2",
                    "src": "question2.png",
                    "position": "fill"
                }
            ],
            "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
            "autoProceed": false,
            "doRecording": true,
            "choiceRequired": true,
            "canMakeChoiceBeforeAudioFinished": true,
            "allowUserPause": false
        },
    "sequence": [
        "video-config",
        "video-consent",
        "parent-preview",
        "intro",
        "warmup-questions",
        "question1",
        "question2",
        "exit-survey"
    ]
}
