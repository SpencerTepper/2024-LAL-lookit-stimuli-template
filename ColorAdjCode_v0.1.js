{
    "frames": {
        "video-config": {
            "kind": "exp-video-config",
            "troubleshootingIntro": ""
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
                    "caption": "At the start of each section, we show a short story and play audio reading out loud the question",
                    "audio": "sample_1"
                },
                {
                    "caption": "Your child will be look a image with two people and a group of objects. We'll ask him or her choose which person has the object being asked for by the question.",
                    "image": "sample.png"
                }
            ]
        },
        "warmup-revamped": {
            "kind": "group",
            "frameList": [
                {
                    "audio" : "warmup1audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "warmup(1o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "warmup(1o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [17,20], "imageId": "option1"
                        },
                        {
                            "range": [
                                20,
                                23
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [6,10], "imageId" : "option1"
                        },
                        {
                            "range" : [10,14], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "warmup2audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "warmup(2o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "warmup(2o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [12,15], "imageId": "option1"
                        },
                        {
                            "range": [
                                15,
                                18
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,11], "imageId" : "option2"
                        }
                    ]
                }
            ],
            "commonFrameProperties": {
                "kind": "exp-lookit-images-audio",
                "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
                "autoProceed": false,
                "doRecording": false,
                "choiceRequired": true,
                "parentTextBlock": {
                    "text": "If your child doesn't understand or wants to hear the audio again, press replay audio.",
                    "title": "For parents"
                },
                "canMakeChoiceBeforeAudioFinished": true,
                "allowUserPause": false
            }
        },
        "test-questions1": {
            "kind": "group",
            "frameList": [
                {
                    "audio" : "question1audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(1o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(1o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [17,20], "imageId": "option1"
                        },
                        {
                            "range": [
                                20,
                                23
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [6,10], "imageId" : "option1"
                        },
                        {
                            "range" : [10,14], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question2audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(2o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(2o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question3audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(3o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(3o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question4audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(4o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(4o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question5audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(5o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(5o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question6audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(6o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(6o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                }
            ],
            "commonFrameProperties": {
                "kind": "exp-lookit-images-audio",
                "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
                "autoProceed": false,
                "doRecording": false,
                "choiceRequired": true,
                "parentTextBlock": {
                    "text": "If your child doesn't understand or wants to hear the audio again, press replay audio.",
                    "title": "For parents"
                },
                "canMakeChoiceBeforeAudioFinished": true,
                "allowUserPause": false
            }
        },
        "test-questions2": {
            "kind": "group",
            "frameList": [
                {
                    "audio" : "question7audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(7o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(7o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [17,20], "imageId": "option1"
                        },
                        {
                            "range": [
                                20,
                                23
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [6,10], "imageId" : "option1"
                        },
                        {
                            "range" : [10,14], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question8audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(8o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(8o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question9audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(9o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(9o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question10audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(10o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(10o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question11audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(11o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(11o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                },
                {
                    "audio" : "question12audio",
                    "images": [
                        {
                            "id": "option1",
                            "src": "question(12o1).png",
                            "top": "1"
                        },
                        {
                            "id": "option2",
                            "src": "question(12o2).png",
                            "top": "62"
                        }
                    ],
                    "highlights": [
                        {
                            "range": [14,17], "imageId": "option1"
                        },
                        {
                            "range": [
                                17,
                                20
                            ],
                            "imageId": "option2"
                        },
                        {
                        "range" : [4,8], "imageId" : "option1"
                        },
                        {
                            "range" : [8,12], "imageId" : "option2"
                        }
                    ]
                }
            ],
            "commonFrameProperties": {
                "kind": "exp-lookit-images-audio",
                "baseDir": "https://raw.githubusercontent.com/SpencerTepper/ColorAdjLookit/refs/heads/master",
                "autoProceed": false,
                "doRecording": false,
                "choiceRequired": true,
                "parentTextBlock": {
                    "text": "If your child doesn't understand or wants to hear the audio again, press replay audio.",
                    "title": "For parents"
                },
                "canMakeChoiceBeforeAudioFinished": true,
                "allowUserPause": false
            }
        }
    },
    "sequence": [
        "test-questions1",
        "test-queestions2",
        "warmup-revamped",
        "video-config",
        "video-consent",
        "intro",
        "parent-preview"
    ]
}
