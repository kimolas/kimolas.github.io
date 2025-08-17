// To add a new post, copy the format below and add it to the top of the list.
// The date is optional but recommended.
const posts = [
    {
        title: "Local rings",
        createdDate: "2025-08-16",
        lastEdited: "2025-08-17",
        content: `I read through Hungerford's chapter on rings. After the exercises, I have some handle on local rings, but I don't yet understand the connection to geometry---and a ring having a unique maximal ideal still feels like an arbitrary distinction. 

Exercise 3.4.16 was entertaining. I enjoy finding ways to apply the first isomorphism theorem (that is, if $\\varphi: R \\to \\Ima {\\varphi}$ is a ring homomorphism, then $R/\\Ker{\\varphi} \\cong \\Ima{\\varphi}$).

The exercise was: prove every nonzero homomorphic image of a local ring is local. 

Proof: By first iso theorem, WTS $R/\\Ker{\\varphi}$ is local. Know $1_R \\notin \\Ker{\\varphi}$ as that would imply $\\Ker{\\varphi} = R$, hence $\\Ima{\\varphi} = 0$, a contradiction. Now, since $\\Ima{\\varphi} \\neq 0$, we clearly have $R \\neq 0$; therefore every ideal of $R$, such as $\\Ker{\\varphi}$, is contained in a maximal ideal of $R$. But $R$ being local has a unique maximal ideal, call it $M$, whence $\\Ker{\\varphi} \\subseteq M$. Finally, we apply the correspondence theorem (AKA the fourth isomorphism theorem), which says that the ideals that contain $\\Ker{\\varphi}$ are in bijection with the ideals of $R/\\Ker{\\varphi}$, hence every ideal of $R/\\Ker{\\varphi} \\cong \\Ima{\\varphi}$ is of the form $J/\\Ker{\\varphi}$. Any such ideal must be contained in $M/\\Ker{\\varphi}$ or be $\\Ima{\\varphi}$ itself, hence $M/\\Ker{\\varphi}$ is the unique maximal ideal, and so $\\Ima{\\varphi}$ is local. $\\blacksquare$`
    },
    {
        title: "QM (Hall)",
        createdDate: "2025-08-16",
        lastEdited: "2025-08-16",
        content: `I read through section 7.1 of Hall's "QM for Mathematicians." I now understand better the relationship between the spectrum $\\sigma(A)$ and the eigenvalues (if any) of a bounded operator $A$.`
    }
];