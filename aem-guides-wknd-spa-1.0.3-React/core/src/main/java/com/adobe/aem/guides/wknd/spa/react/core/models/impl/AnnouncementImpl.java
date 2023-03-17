package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import java.util.Objects;

import javax.annotation.PostConstruct;

import org.apache.commons.httpclient.URIException;
import org.apache.commons.httpclient.util.URIUtil;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.Announcement;


@Model(adaptables = SlingHttpServletRequest.class, adapters = {  Announcement.class,
    ComponentExporter.class }, resourceType = AnnouncementImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AnnouncementImpl implements Announcement {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/announcement";
    
    // @ValueMapValue private String imagePath;
    @ValueMapValue private String description;
    @ValueMapValue private String linktext;
    @ValueMapValue private String link;
    @ValueMapValue private String linktarget;
    @ValueMapValue private String id;
    @ValueMapValue private String title;
     

    @ChildResource(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String multifields;


    @PostConstruct
    protected void init() throws URIException{
        if(Objects.nonNull(multifields)){
            String tempPath = URIUtil.encodePath(multifields);
            multifields = tempPath;
            System.out.println(tempPath);
        }
    }

   
    @Override
    public String getDescription(){
        return description ;
    }

    @Override
    public String getLinkText(){
        return linktext; 
    }

    @Override
    public String  getLink(){
        return link;
    }

    @Override
    public String getLinkTarget(){
        return linktarget;
    }

    @Override 
    public String getTitle(){
        return title;
    }
  
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
    
}

