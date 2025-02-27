"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Trevor Egbert 
   Date: 11/6/2022  

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

window.addEventListener("load", makeOutline);

function makeOutline()
{
   // Location of the document outline
   var outline = document.getElementById("outline");

   // Source of Document
   var soruce = document.getElementById("doc");

   var mainHeading = document.createElement("h1");
   var outlineList = document.createElement("ol");
   var headingText = document.createTextNode("Outline");

   mainHeading.appendChild(headingText);
   outline.appendChild(mainHeading);
   outline.appendChild(outlineList);

   createList(soruce, outlineList);
}

function createList(source, outlineList)
{
   /*Loop through all the child nodes of the source article
   until no child node left*/

   var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

   // Previous level of heading
   var prevLevel = 0;

   //running total of the number of OutLined items in the list
   var headNum = 0;

   for(var n = source.firstChild; n !== null; n = n.nextSibling)
   {
      var headLevel = headings.indexOf(n.nodeName);
      if(headLevel !== -1) // I have a hit
      {

         headNum++;
         if(n.hasAttribute("id") === false)
         {
            n.setAttribute("id", "head" + headNum);
         }

         var listElem = document.createElement("li");
         var linkElem = document.createElement("a");

         linkElem.innerHTML = n.innerHTML;
         linkElem.setAttribute("href", "#" + n.id);

         //Appened the hypertext link to the list item
         listElem.appendChild(linkElem);

         if(headLevel === prevLevel)
         {
            //Append the list item to the current list
            outlineList.appendChild(listElem);
         }
         else if(headLevel > prevLevel)
         {
            //start a new nested list
            var nestedList = document.createElement("ol");
            nestedList.appendChild(listElem);
            
            //append this nested list to the last item on the current list
            outlineList.lastChild.appendChild(nestedList);

            // change the current list to the nested list
            outlineList = nestedList;
         }
         else
         {
            //append the list item to the higher list
            //Calculate the difference between current and prvios level
            var levelUp = prevLevel - headLevel;
            
            // Go up to that higher level
            for(var i = 1; i <= levelUp; i++)
            {
               outlineList = outlineList.parentNode.parentNode;
            }
            outlineList.appendChild(listElem);
         }

         //Update the value of prevLevel
         prevLevel = headLevel;

      }
   }

}