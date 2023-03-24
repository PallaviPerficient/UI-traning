package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;

import com.adobe.aem.guides.wknd.spa.react.core.models.Dropdown;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Dropdown.class,
    ComponentExporter.class }, resourceType = DropdownImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DropdownImpl implements Dropdown {

    @ValueMapValue
    private String select;
  

    static final String RESOURCE_TYPE = "wknd-spa-react/components/Dropdown";
    @Override 
    public String getdropdown(){
        return select;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}   