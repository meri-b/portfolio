import React from "react";
import { useEffect } from "react";

import previewImage from "../../project_previews/sockthief.jpg"; // Adjust the path accordingly

import imageIntern from "../../project_previews/sockthief/intern.jpg";
import imageBlizzard from "../../project_previews/sockthief/blizzardtkrjbs2.jpg";
import imageGoblints from "../../project_previews/sockthief/poster2.jpg"
import imageDryer from "../../project_previews/sockthief/dryermockupnoslot.jpg"
import imageLint from "../../project_previews/sockthief/photo-12.JPG"
import imageDryerProto from "../../project_previews/sockthief/photo-6.JPG"
import imageHouse from "../../project_previews/sockthief/photo-16.JPG"
import imagePuppets from "../../project_previews/sockthief/photo-11.JPG"
import gifAnimation from "../../project_previews/sockthief/animationtest.gif"

import imageSketchLaundromat from "../../project_previews/sockthief/laundromatsketches.jpg"
import imageLaundromatProgress from "../../project_previews/sockthief/photo-21.JPG"
import imageLaundromatFinished from "../../project_previews/sockthief/laundromatfinished.jpg"
import imageBGPoster from "../../project_previews/sockthief/posters-1.jpg"
import imageSketchVillageCompilation from "../../project_previews/sockthief/sockthief2.jpg"
import imageSketchMiscCompilation from "../../project_previews/sockthief/sockthief3.jpg"

import imagePoster2 from "../../project_previews/sockthief/poster3_02.jpg"
import imageFetus5 from "../../project_previews/sockthief/photo-17.JPG"
import imagePuppet2 from "../../project_previews/sockthief/photo-23.JPG"
import imageChairs from "../../project_previews/sockthief/photo-14.JPG"
import imageInTheLint from "../../project_previews/sockthief/inthelint.jpg"


function SockThief() {
  setInterval(() => {
    [...document.body.children].forEach(el => 
      console.log(el.tagName, el.className, el.offsetHeight)
    );
  }, 500);
  
  
  return (

      <div
      name="sockthief"
      className="min-h-screen overflow-hidden bg-[#0a192f] text-gray-300 pt-[80px] flex flex-col items-center"
      >

        <div className="w-full bg-[#0a192f] text-center py-8">
        <h1 className="text-4xl font-bold text-cyan-500">The Sock Thief</h1>
        </div>


        <img
        src={previewImage}
        alt="Preview"
        height="400"
        width="700"
        />
        <br></br>

        <div className="lg:w-[60%] text-lg lg:text-4xl text-left leading-relaxed mb-4">
        <p><b>TLDR:</b>  I designed and built sets for a stop motion short film overseen by Stephen 
        Chiodo while at Laguna College of Art and Design in 2013. I guess I also animated some of the scenes? 
        </p>
        </div>

        <div className="relative w-full max-w-[1200px] h-[500px] overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/VSnr5RHAPPc" 
              title="Sock Thief Preview" 
              frameBorder="0" 
              allowFullScreen
              tabIndex="-1"
            ></iframe>
          </div>
          <p>Here is the actual film, which you can watch and everything!</p>
        <br></br>  

        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>Ok, so to go way back, in high school I never quite knew what I wanted to do with my life. 
          I think that is typical, but I felt a lot of pressure to figure it out right away at the time. 
          The only classes I was really into in school were art class and technical theater. At some point,
          I read a book about the founding of Pixar and became taken with the idea of working in the animation industry. 
          I liked the idea of working for somewhere innovative, creative, and collaborative. This is how I ended up,
          after many applications (and rejections) to various art schools, at Laguna College of Art and Design, 
          majoring in classical hand drawn animation.
        </p>
        <br></br>
  

        <p>
        While I enjoyed it to some degree, I never really loved drawing–or at least as much as you need to love 
        it to succeed in classical animation. Which is a whole lot considering how dead and heavily outsourced 
        the artform is. In an effort to make the career choice work, I gravitated towards tangential alternatives 
        like creative writing, which was my minor for a very brief moment in time (2 whole semesters!), as well 
        as stop motion. The practical nature of it reminded me of technical theater work. As an aside, this is 
        how I ended up doing probably the most naive thing I’ve ever done, which was to respond to a Facebook 
        post from a stranger at Stop Motion Magazine seeking out “interns” for a day. I literally drove by myself 
        to a house somewhere in LA, which could have turned out in content fit for a true crime podcast series, 
        but instead I just sat in a garage and painted miniature set pieces for an episode of Robot Chicken 
        for a few hours and went home. That’s how I earned my only unearned TV credit! Hollywood, baby! 
        </p>
        <br></br>
        </div>


        <img
        src={imageIntern}
        alt="intern"
        width="1000" 
        height="400" 
        />
        <div><p>I cannot find any record of what episode I actually helped on, but here is some proof I did a very stupid thing</p></div>
        <br></br>

        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>
        LCAD is a very small art school and had no stop motion classes on the curriculum, which was disappointing. 
        The summer of 2013 they put together a special summer long master class, designed to produce a stop motion 
        animated short film under the guidance of practical effects specialist, <u><a href="https://www.imdb.com/name/nm0158014/">Stephen Chiodo</a></u>, of Elf, Killer Clown, 
        and Team America fame. I was up for a writing internship at Blizzard that summer, but after multiple follow up 
        interviews trying (and failing) to prove I could write quippy World of Warcraft and Diablo 3 dialogue, I was 
        rejected. I decided to console myself by enrolling in the stop motion masterclass. I detail all this to provide 
        context for my participation in this short film: things were really falling apart for me this summer. I was 
        mentally unravelling. I really did not feel like I belonged anywhere: not as an animator, not in California, 
        not anywhere. 
        </p>
        <br></br>
        </div>

        <img
        src={imageBlizzard}
        alt="blizzard"
        width="600" 
        height="400" 
        />
        <div><p>Sneaky Blizzard folks crushing my dreams</p></div>
        <br></br>

        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>
        So under great emotional and mental duress, I helped create this short film with a dozen or so other students over 
        the summer. Given the state I was in, and the fact that I now write this 12 years later, my memories of this 
        experience were somewhat fragmented. So instead of a neat little narrative, I present to you 10 random 
        things I remember about the production: 
        </p>

        <br></br>
        <p>1</p>
        <p>
          No one was really in charge of what we should actually do, and everything had to be decided on a consensus, 
          including the entire subject and script of the film. I recall once going to San Diego Comic Con and sitting 
          in on a screenwriting panel for animated films. Dean DeBlois was there, which was cool and all, but so was 
          the screenwriter for Garfield 2. I can’t remember who that actually was (sorry, sir), but his sentiments 
          imprinted on me more than anything Dean DeBlois said. Basically, Garfield 2 man told us that sometimes you know a story 
          is shit, and you just have to go ahead and make it anyway, because there are too many cooks in the kitchen 
          that you can’t say no to. That is pretty much what happened on The Sock Thief. We all pitched wildly different 
          ideas to start. No one could agree. We ended up with something incredibly artistically lukewarm. No one was 
          excited about it, but no one hated it either, I guess. I think we would have been better off drawing straws 
          on who got to set the artistic vision and just made whatever they wanted, honestly. Anyway, that’s how we 
           up with a story about a woman who loses a sock in a dryer and meets some goblins. Cool, right?
        </p>
        <br></br>
        </div>

        <img
        src={imageInTheLint}
        alt="lint"
        width="600" 
        height="400" 
        />
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>2</p>
        <p>
          For some time, we referred to the project/film title as “Goblints” and I’m still mad that we didn’t make this the official title.
        </p>
        <br></br>
        </div>


        <img
        src={imageGoblints}
        alt="poster"
        width="600" 
        height="800" 
        />
        <div><p>A mock poster I made at some point. No we did not use it!</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>3</p>
        <p>With my background in theater and set building, I was drawn to the set and prop building portion of the film. 
        I particularly took ownership of the laundromat. Here are some sketches and process photos.  
        </p>
        <br></br>
        </div>


        <img
        src={imageSketchLaundromat}
        alt="sketch"
        width="1000" 
        height="600" 
        />
        <br></br>

        <img
        src={imageLaundromatProgress}
        alt="progress"
        width="1000" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <br></br>


        <img
        src={imageLaundromatFinished}
        alt="finished"
        width="1000" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <br></br>



        <img
        src={imageSketchVillageCompilation}
        alt="sketches"
        width="1000" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <br></br>

      
        <img
        src={imageSketchMiscCompilation}
        alt="sketches"
        width="1000" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>4</p>
        <p>
        As LCAD students, it was our constant inside joke to find ways to make references to our department head, Dave Kuhn, in anything we made. 
        I designed the face of the dryers and named the brand for him. Also, the character at the end is literally just a puppet version of Dave.
        </p>
        <br></br>
        </div>

        <img
        src={imageDryer}
        alt="dryer"
        width="600" 
        height="400" 
        className="rounded-lg shadow-lg mb-4"
        />
        <div><p>KUHN brand dryers were rated best in class by LCAD students</p></div>
        <br></br>

        <img
        src={imageBGPoster}
        alt="poster"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>We also decided to bring Stephen into the tradition. If you look very closely at the posters in the laundromat,
          you might find this poster.</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>5</p>
        <p>
          A LOT of the lint-world sets used real dryer lint. For some reason, my roommates and I would empty our dryer lint into a
          tupperware storage box and bags instead of just, yknow, throwing it out. The joke is on everyone though, because it became extremely 
          handy! Finally, hoarders win the excuse game! I brought it all in and we used it for early set dressing, and mimicking the 
          texture with other materials afterward. I believe a lot of the purple coloring came to prominence in these sets because like 
          a stereotypical college student, I had magenta colored jersey sheets from Target. These left a lot of pink-purple residue in
          our personal dryer lint collection. You should be pleased to know I no longer collect dryer lint as a full fledged 
          adult, despite the urge. 
        </p>
        <br></br>
        </div>

        <img
        src={imageLint}
        alt="lint"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>Yes, at some point I actually took a photo of the lint I brought in.</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>6</p>
        <p>
        Actually, a lot of the set pieces came from us just wandering aisles at Home Depot looking for little things that resembled 
        bigger real world things. Stop motion truly is a hoarder's dream. 
        </p>
        <br></br>
        </div>


        <img
        src={imageDryerProto}
        alt="dryer"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>The dryer faces were simply just plastic lids</p></div>
        <br></br>


        <img
        src={imageHouse}
        alt="house"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>One of the goblint village house prototypes...mainly just trash stuck to cardboard</p></div>
        <br></br>

        <img
        src={imageChairs}
        alt="house"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>The chairs in the laundromat were just paper cups cut in half.</p> </div>
         <div><p>The fire extinguisher was carved out of wood with a dremel by
          my classmate and I remember being SO MAD at how much time he spent on it when there was a lot of other work to do.</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>7</p>
        <p>
        I remember we got a lot of lessons in armature and puppet fabrication from Stephen. It seemed tedious and annoying and I was not particularly
        interested in helping with that part of production. However, I still have one of the extra silicone hands we made, because 
        I’m obviously a hoarder (see dryer lint story above). 
        </p>
        <br></br>
        </div>

        <img
        src={imagePuppets}
        alt="Preview"
        width="1000" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>I was responsible for none of the things pictured here</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>8</p>
        <p>
        I seriously only remember building sets, but the film credits me as an animator as well, and some of my writings from this time reference the 
        fact that Mr. Chiodo liked me and gave me priority on which scenes I wanted to animate. However, I cannot, for the life of me, recollect 
        animating any scenes. I have no idea which ones I did, but it must have been at least one?? 
        </p>
        <br></br>
        </div>

        <img
        src={gifAnimation}
        alt="animation"
        width="800" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>I DID find this animation test on a hard drive. So I guess I animated something at SOME point.</p></div>
        <br></br>

        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>9</p>
        <p>
        Because of my mental health, I was not doing a very good job at feeding myself (which was probably a vicious cycle issue). 
        The campus did not have any kind of cafeteria, cafe, whatever, so I spent most of the summer surviving on cheez-its and diet coke from the two 
        vending machines we did have. 
        </p>
        <br></br>
        </div>

        <img
        src={imagePoster2}
        alt="Poster"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>Another poster I made. I remember finding this hilarious at the time, but now I don't get it. Maybe it had to do with malnourishment.</p></div>
        <br></br>


        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>10</p>
        <p>
        We got a whole damn orchestra to do the score for the film. The score was arranged by a real-deal hollywood man,<u><a href="https://www.imdb.com/name/nm0808596/">James McKee Smith</a></u>,
        who has credits like Shrek and The Bourne Identity. The school was very proud of this and obviously it made them 
        feel like we were putting on a very prestigious production. I suspect this partnership was half the reason they ran the class, 
        because it was arranged from the very beginning. It feels a little silly when I watch the film, since the story and animation 
        is kind of bad but there is such intricate and professional music. 
        </p>
        <br></br>
        </div>


        <img
        src={imageFetus5}
        alt="fetus5"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>We liked to mess around with fabrication supplies in the downtime. I dubbed these the Fetus 5, minus 1. A prestigious production indeed!</p></div>
        <br></br>


        <img
        src={imagePuppet2}
        alt="cursedpuppet"
        width="600" 
        height="400" 
        className="overflow-hidden rounded-lg shadow-lg mb-4"
        />
        <div><p>Another cursed puppet.</p></div>
        <br></br>



        <div className="w-full lg:w-[60%] overflow-hidden text-lg lg:text-2xl text-left">
        <p>
        Now, you’ve been poking around on my website obviously, so you can clearly see I did not become an animator or end up 
        in the film or television industry whatsoever. In fact, I did not return to LCAD after doing this masterclass. 
        It wasn’t the film’s fault, to be clear. Mentally, I needed more support at the time, so I decided to defer my 
        enrollment in the fall and move back home. Shortly after, I took a few programming classes at community college 
        and decided to change the entire direction of my career. Dropping out of art school was the hardest failure to 
        swallow in my life thus far. It was hard to accept that I could not fulfill some vision I had of myself. 
        Looking back on this portion of my life is like remembering a dream you once had. The concrete 
        details are hazy, but I certainly remember the emotional content. Having a film to remember it by is a strange 
        by-product. But it was a significant creative thing I did, so here we are. We can’t say The Sock Thief won any 
        Oscars–it might have made it into a few small festivals, and at least it's an impressive 5 minutes and the 
        puppets are cute? Good for us. 
        </p>

        <br></br>
        <p>
          Now, as a bonus, I unearthed a "making of" video to give more insight into the creation process. I think you see my shoulder painting a set at 0:36, but
          otherwise, I'm not in it. I was probably
          hiding under a desk or something while they were filming this. (I swear I did actually work on this film)
        </p>
        </div>
        <br></br>


        <div className="relative w-full max-w-[1200px] h-[500px] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/75633641"
            height="500"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
              
        <br></br>
        <br></br>


      </div>
    );

}
export default SockThief;