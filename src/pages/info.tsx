import { NavbarHome } from "@/components";
import state from "@/store";
import { useSnapshot } from "valtio";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

const Info = () => {
  const snap = useSnapshot(state);
  return (
    snap.page === "info" && (
      <>
        <NavbarHome info={true} />
        <div className=" flex align-middle justify-center">
          <Image
            as={NextImage}
            isZoomed
            alt="ev3 lego robot"
            src="/brick-ev3.png"
            width={400}
            height={400}
          />
        </div>
        <p className=" text-base mx-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
          ornare arcu dui vivamus arcu. Facilisis volutpat est velit egestas dui
          id ornare arcu odio. Morbi leo urna molestie at elementum eu facilisis
          sed. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
          rhoncus. Morbi tempus iaculis urna id volutpat. Arcu felis bibendum ut
          tristique. Odio ut enim blandit volutpat maecenas volutpat blandit
          aliquam. Mauris nunc congue nisi vitae suscipit tellus mauris a. Quis
          commodo odio aenean sed adipiscing diam donec adipiscing tristique.
          Adipiscing commodo elit at imperdiet dui. Sit amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Aliquam purus sit amet
          luctus venenatis lectus magna fringilla. Porta non pulvinar neque
          laoreet suspendisse interdum. Porttitor lacus luctus accumsan tortor
          posuere ac ut consequat semper. Semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus. Maecenas volutpat blandit aliquam etiam erat
          velit scelerisque. Dignissim enim sit amet venenatis. Velit euismod in
          pellentesque massa placerat duis ultricies lacus. Lacinia at quis
          risus sed vulputate odio. Viverra vitae congue eu consequat ac felis
          donec et. Viverra vitae congue eu consequat ac felis donec et odio.
          Donec et odio pellentesque diam volutpat commodo sed egestas egestas.
          Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Id
          diam vel quam elementum. Nisl nunc mi ipsum faucibus vitae. Erat velit
          scelerisque in dictum non consectetur. Nullam eget felis eget nunc
          lobortis. Viverra maecenas accumsan lacus vel facilisis volutpat. Diam
          phasellus vestibulum lorem sed risus. Vitae suscipit tellus mauris a.
          Tristique senectus et netus et malesuada fames.
        </p>
      </>
    )
  );
};
export default Info;
