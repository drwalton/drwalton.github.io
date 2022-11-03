
<img align="right" src="images/david.JPG" height=150 hspace=10>
I am a postdoctoral research fellow, working at the [Virtual Environments and Computer Graphics](http://vecg.cs.ucl.ac.uk/) group at [University College London](https://www.ucl.ac.uk/) with [Anthony Steed](https://wp.cs.ucl.ac.uk/anthonysteed/). My research focuses on rendering and computer vision techniques for virtual and augmented reality.

# Research Interests

## Real-time Computer Graphics, Perception and Displays

Advances in display technology are allowing increasingly high-fidelity displays to be produced. As pixel density increases, however, it becomes increasingly challenging to render content at full resolution in real time. Additionally, the bandwidth required to stream content to these displays becomes problematic. Given access to eye tracking, how can we exploit this information to reduce bandwidth and computational requirements without sacrificing perceived quality? How should our knowledge of human perception influence the way we design displays?

## Computer Graphics for Mixed Reality

Mixed reality creates new challenges when producing high quality real-time graphics. The rendered virtual content needs to not only appear realistic, but also consistent with the existing real content. One challenge is how to effectively estimate the real lighting environment, and how to use the estimate to render the virtual content. Another is that of accurately determining where virtual content is obscured by real content, and should not be rendered.

# Publications

## 2022

<a href="images/metalight.jpg">
<img align="left" src="images/metalight.jpg" width=100 hspace=10>
</a>
**Beyond Flicker, Beyond Blur: View-coherent Metameric Light Fields for Foveated Display**

_Prithvi Kohli, David R. Walton, Rafael Kuffner dos Anjos, Anthony Steed and Tobias Ritschel_

Poster presented at IEEEVR 2022:
[\[Page\]](https://vr.cs.ucl.ac.uk/research/pipelines/metameric-light-fields/)
[\[Poster\]](https://docs.google.com/presentation/d/1Ie3Vy5Bs3SWeCePeJEVUhX8SEq4VblZen7Nz9NqRKWs/edit#slide=id.p)
[\[Short Paper\]](https://vr.cs.ucl.ac.uk/wp-content/uploads/sites/24/2022/03/Metameric__Light_Fields_Poster.pdf)
[\[Teaser Video\]](https://www.youtube.com/watch?v=uCWhjDCPIWY)

This work extends metamer generation to 3D light fields. These present some unique challenges when trying to create metamers with coherent, convincing motion in the periphery. We show how these light field metamers can be generated, and explore how they can be efficiently compressed.

<a href="images/metaholo.jpg">
<img align="left" src="images/metaholo.jpg" width=100 hspace=10>
</a>
**Metameric Varifocal Holograms**

_David R. Walton, Koray Kavakli, Rafael Kuffner dos Anjos, David Swapp, Tim Weyrich, Hakan Urey, Anthony Steed, Tobias Ritschel and Kaan Aksit_

IEEEVR 2022:
[\[PDF(ArXiv)\]](https://arxiv.org/abs/2110.01981) 
[\[Page\]](https://vr.cs.ucl.ac.uk/research/pipelines/metameric-varifocal-holography/) 
[\[Video\]](https://vimeo.com/623474853) 
[\[Supplementary Material\]](https://vr.cs.ucl.ac.uk/wp-content/uploads/sites/24/2022/07/Metameric_Varifocal_Holography_Supplemental_Material.pdf) 
[\[Code\]](https://github.com/complight/metameric_holography) 
[\[Library\]](https://github.com/kunguz/odak)

This work focuses on improving computer generated holograms where gaze information is known. It exploits gaze in two ways. First, by using a metameric loss based on our earlier Beyond Blur paper which only penalises perceivable content in the hologram. Second, the holograms are optimised to be correct only at the user's current focal plane. We test our results on a real holographic display prototype.


## 2021

<a href="images/walton2021beyond.jpg">
<img align="left" src="images/walton2021beyond.jpg" width=100 hspace=10>
</a>
**Beyond Blur: Real-time Metamers for Foveated Rendering**

_D Walton, R Kuffner-dos Anjos, S Friston, D Swapp, A Steed, T Ritschel_

ACM Trans Graph (Proc. SIGGRAPH 2021) 40(3): 
[\[PDF\]](https://drwalton.github.io/papers/Beyond_Blur_Preprint.pdf) 
[\[Webpage\]](https://vr-unity-viewer.cs.ucl.ac.uk/) 
[\[Unity Package\]](https://vr-unity-viewer.cs.ucl.ac.uk/assets/UnityPackage.zip) 
[\[Windows Demo\]](https://vr-unity-viewer.cs.ucl.ac.uk/MetamersDemo.zip)
[\[Python Example\]](https://drwalton.github.io/demo/make_metamer.py)

This work introduces a new method for foveated rendering using ventral image metamers. These are alternative versions of images which are indistinguishable from the original for a given fixation point. We introduce a method to extract a model of the perceivable components of an image for a given fixation point, and a method to convert this model to a metamer of the input. Both methods are fast, and the model is compact, allowing metamers to be used for the first time in real-time compression and rendering applications.

## 2019
<a href="images/thesis.png">
<img align="left" src="images/thesis.png" width=100 hspace=10>
</a>
**Improved Real-time Rendering for Mixed Reality** (EngD Thesis)

_David R. Walton_
[\[PDF\]](https://discovery.ucl.ac.uk/id/eprint/10079327/1/Walton_000_Thesis.pdf)

My EngD project focused on real-time techniques for enhancing graphics in MR applications. I focused on how to interpret and exploit data from sensors such as RGBD and fisheye cameras to capture detailed information about the real world, and render more realistic and consistent MR scenes.

## 2018

<a href="images/vrst_2018.png">
<img align="left" src="images/vrst_2018.png" width=100 hspace=10>
</a>
**Dynamic HDR Environment Capture for Mixed Reality** 

_David R. Walton and Anthony Steed_

VRST 2018: 
[\[PDF\]](https://discovery.ucl.ac.uk/id/eprint/10073554/1/VRST_2018_preprint.pdf) 
[\[Bibtex\]](bibtex/vrst_2018.html)
[\[Video\]](https://vimeo.com/429299252)


This paper built on the earlier work in **Synthesis of Environment Maps for Mixed Reality** below. We present new techinques allowing the estimation of full HDR environment maps, and allowing us to respond much more quickly to changes in the real 3D environment. These improvements do not require any additional sensing hardware. We demonstrate a full AR application capable of working in real time.


## 2017

<a href="images/vrst_2017.png">
<img align="left" src="images/vrst_2017.png" width=100 hspace=10>
</a>
**Accurate Real-time Occlusion for Mixed Reality**

_David R. Walton and Anthony Steed_

VRST 2017: 
[\[PDF\]](https://discovery.ucl.ac.uk/id/eprint/1575582/7/Walton_a11-walton.pdf) 
[\[Bibtex\]](bibtex/vrst_2017.html)
[\[Video\]](https://vimeo.com/429298989)
[\[Code\]](https://github.com/drwalton/mrocclusion)

In MR applications, correctly handling occlusion of virtual objects by real ones is critical to maintaining a good user experience, but this remains a significant challenge. Consumer depth sensors can be used for this purpose, but the depth maps they provide are noisy, incomplete and often unreliable. This paper presents a technique for using these depth maps to estimate a high-quality occlusion matte. We also develop a technique for quantitatively comparing the quality of AR occlusion handling methods, and use it to assess our approach and others.

<a href="images/ismar_2017.png">
<img align="left" src="images/ismar_2017.png" width=100 hspace=10>
</a>
**Synthesis of Environment Maps for Mixed Reality**

_David R. Walton, Diego Thomas, Anthony Steed and Akihiro Sugimoto_

ISMAR 2017: 
[\[PDF\]](https://discovery.ucl.ac.uk/id/eprint/1569655/1/ISMAR_RevisedSubmission_2017_06.pdf)
[\[Bibtex\]](bibtex/ismar_2017.html)

High-quality estimation of surrounding lighting is important for rendering realistic virtual objects in AR. Particularly when rendering specular, mirror-like virtual materials, high-frequency environment lighting is required. This paper presents techniques for estimating a 360 degree environment map around a virtual object, constructed using data from a two-camera system consisting of a depth camera and a fisheye camera. We show how these sensors can be used in a real-time system that tracks the motion of the cameras and updates a 3D scene model in real time, using this to estimate environment maps and render realistic 3D objects.


# Patents

**Augmented Reality Occlusion**

_David R. Walton, Imagination Technologies Ltd._
[\[Google Patents\]](https://patents.google.com/patent/US10600247B2/)

**Analysing Objects in a Set of Frames**

_Aria Ahmadi, David R. Walton, Cagatay Dikici, Imagination Technologies Ltd._
[\[Google Patents\]](https://patents.google.com/patent/GB2599506A/)

# Career

## Research Associate, UCL 2020-Present

I currently work as a research fellow in the [Virtual Environments and Computer Graphics](http://vecg.cs.ucl.ac.uk/) group at UCL.

## Research Engineer, Imagination Technologies 2018-2020

From 2018-2020 I continued to work at [Imagination Technologies](https://www.imaginationtech.com/) and was promoted to Research Engineer.

## EngD Student, UCL & Imagination Technologies 2014-2018

From 2014-2018 I worked on an EngD project, a collaboration between the [Virtual Environments, Imaging and Visualisation Centre](https://veiv.cs.ucl.ac.uk/index.html) at UCL and [Imagination Technologies](https://www.imaginationtech.com/). It focused on novel real-time rendering techniques for AR, particularly on techniques applicable to mobile devices. This was supervised by [Prof. Anthony Steed](https://wp.cs.ucl.ac.uk/anthonysteed/) from UCL, and [Luke Peterson](https://www.linkedin.com/in/lupeterson/) and [Paul Brasnett](https://www.linkedin.com/in/paul-brasnett-870343b6/) of Imagination Technologies.

The EngD included a taught MRes component, during which I took courses including Computer Vision, Computer Graphics and Virtual Reality. As part of the VR course group project, we developed an immersive VR application for the [CAVE](http://www0.cs.ucl.ac.uk/research/vr/Projects/Cave/). I passed the MRes component with a distinction and was added to the Dean's list.

During the EngD I took part in an internship, working for 6 months at the [National Institute for Informatics](https://www.nii.ac.jp/en/) in Tokyo supervised by [Prof. Akihiro Sugimoto](http://research.nii.ac.jp/~sugimoto/) and collaborating with [Diego Thomas](https://sites.google.com/site/diegotthomas/home) of Kyushu University.

## BSc Mathematics, MSc Computer Science and Applications, University of Warwick 2009-2013

I completed my BSc in Mathematics at the University of Warwick, obtaining a 1st class degree. I continued on to an MSc in Computer Science and Applications, gaining a distinction and the prize for best overall graduating student. My MSc dissertation focused on techniques for real-time computer graphics in OpenGL.

# Contact

Email: david.walton.13 at ucl.ac.uk

[Google Scholar](https://scholar.google.com/citations?user=GQMA8PQAAAAJ)

[Github](https://github.com/drwalton)

[LinkedIn](https://www.linkedin.com/in/davidrobertwalton/)

[ResearchGate](https://www.researchgate.net/profile/David_Walton26)

