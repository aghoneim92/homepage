import React from "react";
import classes from "./BasicInfo.module.css";

export default function BasicInfo() {
  return (
    <table className={classes.infoTable}>
      <tbody>
        <tr>
          <td>Born</td>
          <td>30 September, 1992 in Alexandria, Egypt</td>
        </tr>
        <tr>
          <td>Country of Residence</td>
          <td>Egypt</td>
        </tr>
        <tr>
          <td>Degree</td>
          <td>
            BSc Computer Engineering, Alexandria University - 2014 - GPA 3.59
          </td>
        </tr>
        <tr>
          <td>Homepage</td>
          <td>
            <a href="https://homepage-8ffa0.web.app/">https://ghoneim.me</a>
          </td>
        </tr>
        <tr>
          <td>Github</td>
          <td>
            <a href="https://github.com/aghoneim92">
              https://github.com/aghoneim92
            </a>
          </td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>+20 12 777 666 43</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <a href="mailto:ahmedghoneim92@gmail.com">
              ahmedghoneim92@gmail.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
