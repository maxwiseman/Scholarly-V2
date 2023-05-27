'use client'

import PageWrapper from "../../pagewrapper";

export default function Class({params} : {params: {classname: string}}) {  
  return (
    <PageWrapper>
      <h1 className="mt-0">{params.classname[0].toUpperCase() + params.classname.substring(1)} Class</h1>
    </PageWrapper>
  )
}