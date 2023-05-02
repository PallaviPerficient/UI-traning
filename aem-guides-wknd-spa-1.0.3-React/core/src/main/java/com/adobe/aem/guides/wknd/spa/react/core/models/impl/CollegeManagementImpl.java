package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.CollegeManagement;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { CollegeManagement.class,
    ComponentExporter.class }, resourceType = CollegeManagementImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CollegeManagementImpl implements CollegeManagement {

    @ValueMapValue private String name;
    @ValueMapValue private String about;
    @ValueMapValue private String email;
    @ValueMapValue private String address;
    @ValueMapValue private String mobnumber;
    @ValueMapValue private String dob;
    @ValueMapValue private String gender;
    @ValueMapValue private String collegename;
    @ValueMapValue private String collegeabout;
    @ValueMapValue private String collegelink;
    @ValueMapValue private String collegeNumber;
    @ValueMapValue private String coursename;
    @ValueMapValue private String coursedetails;
    @ValueMapValue private String stream;
    @ValueMapValue private String collegeimage;
    @ValueMapValue private String getimage;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/collegemanagement";
    @Override 
    public String getName(){
        return name;
    }
    @Override
    public String getAboutyourself(){
        return about;
    }
    @Override
    public String getmailId(){
        return email;
    }
    @Override
    public String getAddress(){
        return address;
    }
    @Override
    public String getMobile(){
        return mobnumber;
    }
    @Override
    public String getDOB(){
        return dob;
    }
    @Override
    public String getGender(){
        return gender;
    }
    @Override
    public String getUploadImage(){
        return getimage;
    }
    @Override
    public String getCollegeName(){
        return collegename;
    }
    @Override
    public String getCollegeAbout(){
        return collegeabout;
    }
    @Override
    public String getCollegeMobile(){
        return collegeNumber;
    }
    @Override
    public String getCollegepic(){
        return collegeimage;
    }
    @Override
    public String getCollegelink(){
        return collegelink;
    }
    @Override
    public String getCourseName(){
        return coursename;
    }
    @Override
    public String getCourseDetails(){
        return coursedetails;
    }
    @Override
    public String getStream(){
        return stream;
    }
    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   