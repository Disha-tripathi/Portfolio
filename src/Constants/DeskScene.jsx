import React from 'react';
import Laptop from '../assets/laptop.svg';
import Table from '../assets/table.svg';
import cupsteam from '../assets/cup_with_steam.svg';
import Group from '../assets/Group.svg';

const DeskScene = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      
      {/* Table + Laptop together */}
      <div className="absolute bottom-0 w-full">
        {/* Table */}
        <img 
          src={Table} 
          alt="Workspace table" 
          className="w-full h-auto max-h-[100px] sm:max-h-[120px] object-contain"
        />

        {/* Laptop sitting on table */}
        <img 
          src={Laptop} 
          alt="Developer laptop" 
          className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-lg"
        />
      </div>

      {/* Coffee cup with steam */}
      <div className="absolute bottom-[60px] sm:bottom-[70px] md:bottom-[80px] right-[5%]">
        <img 
          src={cupsteam} 
          alt="Coffee cup with steam" 
          className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
        />
      </div>

      {/* Plant */}
      <div className="absolute bottom-[60px] sm:bottom-[80px] md:bottom-[100px] left-[5%] z-20">
        <img 
          src={Group} 
          alt="Desk plant" 
          className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
        />
      </div>

    </div>
  );
};

export default DeskScene;
