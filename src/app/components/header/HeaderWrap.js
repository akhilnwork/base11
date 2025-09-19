import Header from "./Header"
import FetchSsr from "../common/FetchSsr";

const HeaderWrap = async () => {
  const posts = await FetchSsr("/venues/latest-slug");
 const links =  [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Facilities", href: "/facilities" },
    {
      name: "Venues",
      href: posts?.data?.slug ? `/venues/${posts?.data?.slug}` : "/venues/demo",
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];
  return(<>
  <Header links={links} />
  </>)
}

export default HeaderWrap