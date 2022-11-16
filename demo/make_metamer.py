"""
This code provides an example of how to generate metamers in Python
using the method from our 2021 paper "Beyond Blur: Real-time Metamers 
for Foveated Rendering".

It uses the more recent metameric loss function code from the 
"Metameric Varifocal Holograms" paper - this provides a few perceptual
loss functions, but can be used standalone as well.

The metameric loss function is part of the `odak` library
https://github.com/kaanaksit/odak
This can be installed via:
$ pip install odak

It also uses pytorch, see https://pytorch.org/get-started/locally/ for
installation instructions.

Matplotlib is only used at the end to show the result.
"""
import torch
from odak.learn.perception import MetamerMSELoss
from odak.tools import load_image, save_image
import matplotlib.pyplot as plt

# Load image (convert to float, rescale to 0,1)
image = torch.tensor(load_image("image.png")).float() / 255

# Convert image to NCHW format (1,3,512,512)
image = image.permute(2,0,1)[None,...]

# Make the loss func (change parameters here if desired)
# Note - if you're running on large images, or large numbers of images I'd recommend
# running on the GPU if possible. Set device=torch.device("cuda") in the constructor
# here, and convert the inputs & outputs as appropriate (e.g. with .cuda() and .cpu()).
loss_func = MetamerMSELoss(
    alpha=0.04, 
    real_image_width=0.2, real_viewing_distance=0.7, 
    n_pyramid_levels=5, n_orientations=4)

# Make the metamer (change gaze to move fixation around image)
metamer = loss_func.gen_metamer(image, gaze=[0.5, 0.5])

# Convert back to HWC for display & saving.
metamer_disp = metamer[0,...].permute(1,2,0)

# Save the metamer (set range of values in image to [0,1])
save_image("image_metamer.png", metamer_disp, 0, 1)

# Show the metamer in matplotlib
plt.imshow(metamer[0,...].permute(1,2,0))
plt.show()
