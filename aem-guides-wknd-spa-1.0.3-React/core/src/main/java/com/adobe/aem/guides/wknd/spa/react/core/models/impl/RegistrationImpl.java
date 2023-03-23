package com.adobe.aem.guides.wknd.spa.react.core.models.impl;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.aem.guides.wknd.spa.react.core.models.Registration;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.google.common.base.Objects;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;


@Model(adaptables = SlingHttpServletRequest.class, adapters = { Registration.class,
    ComponentExporter.class }, resourceType = RegistrationImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class RegistrationImpl implements Registration {
    static final String RESOURCE_TYPE = "wknd-spa-react/components/Registration";

    @ValueMapValue private String firstname;
    @ValueMapValue private String lastname;
    @ValueMapValue private Date dob;
    @ValueMapValue private String suggestion;
    private String format;

    @PostConstruct
    public void init(){
            DateFormat dateFormat=new SimpleDateFormat("dd/MM/yyyy");
            format=dateFormat.format(dob);
            System.out.println(format);
        }
       

    @Override
    public String getFirstName(){
        return firstname;
    }

    @Override 
    public String getLastName(){
        return lastname;
    }

    @Override
    public String  getDOB(){
        return format;
    }

    @Override
    public String  getSuggestion(){
        return suggestion;
    }

    @Override
    public String getImage(){
        return image;    
    } 
    
    @ValueMapValue(name = "fileReference")
    private String image;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}