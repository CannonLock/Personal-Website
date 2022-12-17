"use strict";(self.webpackChunklock_dot_com=self.webpackChunklock_dot_com||[]).push([[4915],{14652:function(e,t,A){A.r(t),A.d(t,{_frontmatter:function(){return c},default:function(){return d}});var a=A(63366),n=(A(67294),A(64983)),o=A(32985),i=["components"],c={},s={_frontmatter:c},r=o.Z;function d(e){var t=e.components,A=(0,a.Z)(e,i);return(0,n.kt)(r,Object.assign({},s,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"AI Bird Watching"),(0,n.kt)("p",null,"My birds need to be watched, but I cannot always watch them. Using the\nImageAI Python library I can do this easily. With ~20 lines of code I can\nfind if there are any birds in an image, and count how many with varying\ndegrees of accuracy."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"setup_detector")," function sets up the ",(0,n.kt)("inlineCode",{parentName:"p"},"ObjectDetection")," model from\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OlafenwaMoses/ImageAI"},"ImageAI"),".\nIn this model I choose to load the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OlafenwaMoses/ImageAI/releases/download/1.0/yolo-tiny.h5"},"TinyYoloV3 model"),",\nchosen because it is the most lightweight model, and I plan to run this on\nmy Raspberry PI."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from imageai.Detection import ObjectDetection\n\ndef setup_detector():\n  """\n  Build the detection model\n  :return: The detection model\n  """\n  execution_path = os.getcwd()\n  detector = ObjectDetection()\n  detector.setModelTypeAsTinyYOLOv3()\n  detector.setModelPath(os.path.join(execution_path, "./yolo-tiny.h5"))\n  detector.loadModel()\n')),(0,n.kt)("p",null,"Using this model it is time to detect the birds. I only want to see the\nbirds in the image do I set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomObjects")," to birds only. Then by\nfeeding in my input image I get the image seen below as output."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\ndef process_picture(image_path, output_path):\n  """\n  Process the input image\n  :param image_path: Input image path\n  :param output_path: Output image path\n  :return: Found objects\n  """\n  detector = setup_detector()\n  custom_object = detector.CustomObjects(bird=True)\n  detections = detector.detectObjectsFromImage(custom_objects=custom_object,\n                                               input_image=image_path,\n                                               output_image_path=output_path,\n                                               minimum_percentage_probability=1,\n                                               display_object_name=False)\n\n  return detections\n')),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",(0,n.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/4fdc16c5d58318a2274a9812173b9cad/7cc5e/bird_watching_output.jpg",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,n.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCAQT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABoz/JlLaUTPQ2E//EABwQAAICAgMAAAAAAAAAAAAAAAECABESIgMEE//aAAgBAQABBQL0VI3at15QQ+0xxgIpdkMoT//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAIBBAMAAAAAAAAAAAAAAAABEAIRITEyQaH/2gAIAQEABj8Cs6ujGjc8fRNij//EABwQAQACAgMBAAAAAAAAAAAAAAEAETFhIUFxUf/aAAgBAQABPyGsUKtiKOe0GqD2W364hmTnyEolj6Ykw0hVif/aAAwDAQACAAMAAAAQQ8e//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8QY//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EHZs/wD/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAxIUFRYXGR/9oACAEBAAE/EG2IAA1gAeWdaY/KmouUkWOHx6wkV1rTD6Dyxi4lyWHdmChdEP3Ddn3P/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"ImageAI Output",title:"ImageAI Output",src:"/static/4fdc16c5d58318a2274a9812173b9cad/7cc5e/bird_watching_output.jpg",srcSet:["/static/4fdc16c5d58318a2274a9812173b9cad/f93b5/bird_watching_output.jpg 300w","/static/4fdc16c5d58318a2274a9812173b9cad/7cc5e/bird_watching_output.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,n.kt)("p",null,"With these ~20 lines of code we have found all the birds in our image. As\nyou can see the probability percentages are quite low, but this can be\nimproved with a different model. The full guide including all model choices\ncan be found on the full\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OlafenwaMoses/ImageAI/blob/master/imageai/Detection/README.md"},"ImageAI Detection documentation"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-ai-birdwatching-mdx-412f460e8161a65143bd.js.map