import {Carousel , Typography , Button} from '@material-tailwind/react'

export function CarouselWithContent() {

    const Events = [{
        img: {
          coverimage: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/337707023_1608699602927806_1306400721973181570_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=thspNDDeYzIAX-cLdQV&_nc_ht=scontent.flko8-1.fna&oh=00_AfCRMzq2vj21l7S1Qdl8aI1KXgPUiD0O4pTxlJuDK5CLhA&oe=6609C847",
          eventimage1: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/331138310_879322879945247_1395911172421694315_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6Qx22m9KBQwAX_J_WUf&_nc_ht=scontent.flko8-1.fna&oh=00_AfBUAEJqgL3FVsohSHMVwM4kZlGRYZZjG2RXJHvzZF9qWA&oe=6608D770" ,
          eventimage2: "https://i.ytimg.com/vi/x_ktgvUIuU8/maxresdefault.jpg" ,
          eventimage3: "https://th.bing.com/th/id/OIP.WjjuPe1Bljd-bgs-6LMYywHaEO?rs=1&pid=ImgDetMain" ,
        },
        title: "Fotomela",
        description: "Annual Photo-Exhibition of IIT (ISM) Dhanbad",
        key: 1,
    },
    {
        img: {
          coverimage: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/426599462_955246932627050_740319788880040589_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OK9va1k9xZgAX8Cnpnh&_nc_ht=scontent.flko8-1.fna&oh=00_AfD56oNoU0gI0ccdvf-Z4tKzYR4n9s45eB0ANH0Dpz_NKA&oe=660D8B66",
          eventimage1: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/426620379_955247212627022_3316797989661404342_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1cyHL9I5w_IAX-ra19_&_nc_ht=scontent.flko8-1.fna&oh=00_AfAKrHiymFo3cYybrXajzrFqfWeiP0ACuYzNOkiVyvno6w&oe=660DA6D6" ,
          eventimage2: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/426600851_955247325960344_6772254540636348868_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DCW11D8yjQIAX9JVo34&_nc_oc=Adgm7BVz5e3j8de7e7c1OBp7ofSCGAtg-3Ah2eaGIIQn5ojaJB_fFHbmQ56g40Vstws&_nc_ht=scontent.flko8-1.fna&oh=00_AfDiWp13c6E6Gg88eq_kawDy3S4P93QVVIJWTy2xNpYGPQ&oe=660D7ECC",
          eventimage3: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/425733787_953956896089387_160021407531782306_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UWpO5Y-H2kQAX_S7FoT&_nc_ht=scontent.flko8-1.fna&oh=00_AfAWGp-MQSUFzR7pj4jQa7xBY5RnA8U3tpzW1duunBM-kg&oe=660D89CC" ,
        },
        title: "Srijan",
        description: "Annual Socio-Cultural Fest of IIT (ISM) Dhanbad",
        key: 2,
    },
    {
      img: {
        coverimage: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/391683713_893451225473288_6773959962457025560_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=56tuAnuaw-QAX9-4L2G&_nc_ht=scontent.flko8-1.fna&oh=00_AfBL8WA2ZV-3XQCYBl4-fKn0oQvEzmJ4_W8rEofHNrod1A&oe=660D829B",
        eventimage1: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/391694368_893451198806624_1925102276839695818_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=su-UBbDy2YkAX_RkhMY&_nc_ht=scontent.flko8-1.fna&oh=00_AfC3B2_NtJtTmIA4l8PryM89gAjiwW0zO2-41loMfH8jbQ&oe=660D8AB5" ,
        eventimage2: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/391727352_893451202139957_587759857703571954_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8L98htzi8qEAX_w_0bW&_nc_ht=scontent.flko8-1.fna&oh=00_AfDd5COK6trHJSZlLcFU8xvjjvPVUiRzF0EUTIThiEQEZg&oe=660D7CB3",
        eventimage3: "https://scontent.flko8-1.fna.fbcdn.net/v/t39.30808-6/391727352_893451202139957_587759857703571954_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8L98htzi8qEAX_w_0bW&_nc_ht=scontent.flko8-1.fna&oh=00_AfDd5COK6trHJSZlLcFU8xvjjvPVUiRzF0EUTIThiEQEZg&oe=660D7CB3" ,
      },
        title: "Concetoo",
        description: "Annual Technical Fest of IIT (ISM) Dhanbad",
        key: 3,
    },]
  return (
    <Carousel className="w-full -mb-20 bg-zinc-500  ">
      <div className=" w-full ">
        <img
          src={Events[0].img.coverimage}
          alt="image 1"
          className=" w-full sm:h-screen lg:h-1/2 md:aspect-square object-fill"
        />
        <div className=" flex justify-center w-full place-items-center">
          <div className="w-3/4 text-center text-black md:w-2/4">
            <Typography
              variant="h1"
              color="black"
              className=" text-lg font-semibold md:text-2xl lg:text-3xl"
            >
              {Events[0].title}
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="text-sm opacity-80"
            >
             {Events[0].description}
            </Typography>
          </div>
        </div>
        <div className='w-full md:mx-2 mt-5 h-full  '>
            <div className='  grid sm:grid-cols-3 sm:gap-1 gap-10 md:gap-1 place-items-center  sm:place-items-center'>

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40   ' src={Events[0].img.eventimage1} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block w-[40vw] sm:w-40' src={Events[0].img.eventimage2} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw] sm:w-40 ' src={Events[0].img.eventimage3} alt="" />

            </div>
        </div>
      </div>
      <div className=" w-full">
        <img
          src= {Events[1].img.coverimage}
          alt="image 2"
          className=" w-full sm:h-screen lg:h-1/2 md:aspect-square object-fill"
        />
        <div className=" flex justify-center w-full items-center">
          <div className="w-3/4 text-center text-black md:w-2/4">
            <Typography
              variant="h1"
              color="black"
              className=" text-lg font-semibold md:text-2xl lg:text-3xl"
            >
              {Events[1].title}
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className=" text-sm opacity-80"
            >
              {Events[1].description}
            </Typography>
          </div>
        </div>
        <div className='w-full md:mx-2 mt-5 h-full   '>
            <div className='  grid sm:grid-cols-3 sm:gap-1 gap-10 md:gap-1 place-items-center  sm:place-items-center'>

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40 ' src={Events[1].img.eventimage1} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40' src={Events[1].img.eventimage2} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40' src={Events[1].img.eventimage3} alt="" />
            
            </div>
        </div>
      </div>
      <div className=" w-full">
        <img
          src= {Events[2].img.coverimage}
          alt="image 3"
          className="  w-full sm:h-screen lg:h-1/2 md:aspect-square object-fill"
        />
        <div className=" flex justify-center w-full place-items-center">
          <div className="w-3/4 text-center text-black md:w-2/4">
            <Typography
              variant="h1"
              color="black"
              className=" text-lg md:text-2xl lg:text-3xl"
            >
              {Events[2].title}
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="text-sm opacity-80"
            >
             {Events[2].description}
            </Typography>
          </div>
        </div>
        <div className='w-full md:mx-2 mt-5 h-full'>
            <div className='  grid sm:grid-cols-3 sm:gap-1 gap-10 md:gap-1 place-items-center  sm:place-items-center'>

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40 ' src={Events[2].img.eventimage1} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40' src={Events[2].img.eventimage2} alt="" />

                    <img className='object-fill aspect-square  sm:inline-block  w-[40vw]   sm:w-40' src={Events[2].img.eventimage3} alt="" />
            
            </div>
        </div>
      </div>
    </Carousel>
  );
}