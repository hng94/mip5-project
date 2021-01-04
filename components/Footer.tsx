import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="sticky bottom-0 border-t border-gray-400 flex flex-row justify-center space-x-2 py-2">
      <span>GIVE project</span>
      <a href="https://github.com/hoangnguyen94/mip5-project">
        <FontAwesomeIcon
          icon={["fab", "github"] as IconProp}
          className="h-6 w-6 cursor-pointer text-red-400"
          size="lg"
        />
      </a>
    </div>
  );
}
